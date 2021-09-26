import React from 'react';
import WcShell from './wc-app.js';

/** 由于react-dom在对比vdom时，会将属性值强制转换为string
 * 因此将每个web component封装一层react组件 */
export function transformToReact<ElementType extends HTMLElement, PropsType>(TagName: any) {
  const ReactComponent: React.ForwardRefRenderFunction<{}, PropsType> = (props, ref) => {
    return (
      <TagName
        ref={(el: ElementType) => {
          if (el) {
            Object.keys(props).forEach(k => {
              const v = props[k];
              el.setAttribute(k, v);
            });

            if (typeof ref === 'function') {
              ref(el);
            } else if (typeof ref === 'object' && ref && 'current' in ref) {
              (ref as any).current = el;
            }
          }
        }}
      />
    );
  };

  let RefReactComponent;

  if (React.forwardRef) {
    RefReactComponent = React.forwardRef(ReactComponent);
    RefReactComponent.displayName = TagName;
  } else {
    class ReactComponentWrapper extends React.Component<PropsType, {}> {
      constructor(props: PropsType) {
        super(props);
        this.state = {};
      }

      public render() {
        return <ReactComponent {...this.props} />;
      }
    }
    RefReactComponent = ReactComponentWrapper;
  }

  // es default export should use const instead of let
  const ExportReactComponent = RefReactComponent as unknown as React.FC<PropsType & React.HTMLAttributes<ElementType>>;

  return ExportReactComponent;
}

customElements.define('scf-wcapp', WcShell);
export default transformToReact('scf-wcapp');
