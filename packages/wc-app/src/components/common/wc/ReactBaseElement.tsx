import { ReactElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import isEqual from 'lodash/isEqual';

/** 所有以React实现内部逻辑的web component的父类 */
export abstract class ReactBaseElement extends HTMLElement {
  public static observedAttributes: string[] = [];

  /** 已经插入dom树 */
  public connected = false;

  /** 当前正在渲染中 */
  public rendering = false;

  public styleContent: string;

  public data: any;

  /** 必须被子类实现 */
  public abstract render: () => ReactElement<any>;

  protected observer: MutationObserver;
  public rootNode;

  protected createRoot = () => {
    this.rootNode = document.createElement('div');
    this.rootNode.id = 'root';
    this.shadowRoot.appendChild(this.rootNode);
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    requestAnimationFrame(() => {
      this.createRoot();
    });

    this.observer = new MutationObserver(() => {
      if (this.connected && !this.rendering && this.attributes.length) {
        this.rendering = true;
        for (; this.attributes.length > 0; ) {
          this.attributes.removeNamedItem(this.attributes[0].name);
        }
        this.$update();
      }
    });
    this.observer.observe(this, { attributes: true });
  }

  /** 依赖于调用方的virtual dom层是否使用setAttribute来设置节点值
   * 经过测试react与vue应该都是这么做的
   * 🔑 这里是普通dom节点是否可以接受复杂对象的关键环节
   * */
  public setAttribute(name: string, value: any) {
    const currentValue = this.data[name];
    if (isEqual(currentValue, value)) {
      return;
    }
    this.data[name] = value;

    super.setAttribute(name, value);
  }

  /** 在删除属性的时候，也需要重新render
   * 这个是经过了一阵子开发之后才发现的问题
   * 赶紧补上
   * */
  public removeAttribute(name: string) {
    (this.data as any)[name] = null;
    super.removeAttribute(name);
  }

  /** 同样拦截getAttribute，如果返回在this.data中存放的attribute */
  public getAttribute(name: string) {
    return this.data[name];
  }

  /** 插入dom节点时使用react render */
  public connectedCallback() {
    this.$update();
    this.connected = true;
  }

  /** 移除dom节点的时候必须unmount，否则内存泄漏 */
  public disconnectedCallback() {
    unmountComponentAtNode((this.rootNode as any) as Element);
    this.connected = false;
  }

  public $update() {
    requestAnimationFrame(() => {
      render(this.render(), (this.rootNode as any) as Element);
      this.rendering = false;
    });
  }
}
