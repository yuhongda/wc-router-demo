import React from 'react';
import WcShell from './wc-app.js';
/** 由于react-dom在对比vdom时，会将属性值强制转换为string
 * 因此将每个web component封装一层react组件 */

export function transformToReact(TagName) {
  const ReactComponent = (props, ref) => {
    return /*#__PURE__*/React.createElement(TagName, {
      ref: el => {
        if (el) {
          Object.keys(props).forEach(k => {
            const v = props[k];
            el.setAttribute(k, v);
          });

          if (typeof ref === 'function') {
            ref(el);
          } else if (typeof ref === 'object' && ref && 'current' in ref) {
            ref.current = el;
          }
        }
      }
    });
  };

  let RefReactComponent;

  if (React.forwardRef) {
    RefReactComponent = /*#__PURE__*/React.forwardRef(ReactComponent);
    RefReactComponent.displayName = TagName;
  } else {
    class ReactComponentWrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return /*#__PURE__*/React.createElement(ReactComponent, this.props);
      }

    }

    RefReactComponent = ReactComponentWrapper;
  } // es default export should use const instead of let


  const ExportReactComponent = RefReactComponent;
  return ExportReactComponent;
}
customElements.define('scf-wcapp', WcShell);
export default transformToReact('scf-wcapp');
