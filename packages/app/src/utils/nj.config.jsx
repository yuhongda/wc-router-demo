import nj, { registerFilter, registerExtension } from 'nornj';
// 这里loadash先注释掉，在snowpack环境下会影响n`xxx`语法
// import 'nornj/es/filter/lodash';
import 'nornj-react';
import 'nornj-react/mobx/esm';
import 'nornj-react/router/esm';
import React from 'react';
import { Tooltip } from 'antd';
import schema from 'async-validator';
import { observable, extendObservable } from 'mobx';
import classNames from 'classnames';
nj.filterConfig.currency.symbol = '';

registerFilter({
  percent: (v, bit = 0) => {
    if (v != null) {
      v = v * 100;

      return v.toFixed(bit) + '%';
    }
  },

  percentOrder: (v, bit = 0) => {
    if (v != null && v != '-' && typeof v == 'number') {
      v = v * 100;

      return v.toFixed(bit) + '%';
    }
    if (v == '-') return v;
  },

  parseMillion: (val, noThousands) => {
    if (val == null) {
      return 0;
    }

    let fmt = 0;
    val = parseFloat(val + '');
    if (typeof val == 'number' && !isNaN(val)) {
      fmt = val / 10000;
    }

    const bit = val >= 100 ? 2 : 4;
    return noThousands ? fmt.toFixed(bit) : n`${fmt} | currency(${bit})`;
  },

  noData: v => (v != null ? v : '--'),

  dt(dt, empty) {
    if (dt != null) {
      return dt.substring(0, dt.lastIndexOf('-'));
    } else {
      return empty ? '' : n`noData()`;
    }
  },

  dts: dts => {
    if (dts != null && typeof dts == 'string') {
      return dts.split(',').map(dt => ({ text: dt.substring(0, dt.lastIndexOf('-')), value: dt }));
    } else {
      return [];
    }
  },
});

const FieldWrap = ({ FieldTag, fieldDirectiveOptions, children, ...props }) => {
  const {
    props: directiveProps,
    context: { $this },
    value,
  } = fieldDirectiveOptions;

  return (
    <FieldTag {...props}>
      {$this.props.form.getFieldDecorator(n`${directiveProps}.arguments[0].name`, value())(children)}
    </FieldTag>
  );
};

registerExtension('field', options => {
  const { tagName, setTagName, tagProps } = options;

  setTagName(FieldWrap);
  tagProps.FieldTag = tagName;
  tagProps.fieldDirectiveOptions = options;
});

registerExtension('fieldSpan', options => {
  const { tagProps, props } = options;
  const span = +(n`${props}.arguments[0].name` || 4);
  tagProps.labelCol = {
    span,
  };

  tagProps.wrapperCol = {
    span: 24 - span,
  };
});

const TooltipWrap = ({ TooltipComponent, tooltipDirectiveOptions, ...others }) => {
  const { tagName, props: directiveProps, value } = tooltipDirectiveOptions;
  const args = directiveProps && directiveProps.arguments;

  return (
    <Tooltip placement={(args && args[0].name) || 'rightTop'} title={value()}>
      <TooltipComponent {...others} />
    </Tooltip>
  );
};

registerExtension(
  'tooltip',
  options => {
    const { tagName, setTagName, tagProps } = options;

    setTagName(TooltipWrap);
    tagProps.TooltipComponent = tagName;
    tagProps.tooltipDirectiveOptions = options;
  },
  { onlyGlobal: true, isDirective: true }
);

// registerExtension(
//   'mobxFormData',
//   options => {
//     const { children, props } = options;
//     let _children = children();
//     if (!Array.isArray(_children)) {
//       _children = [_children];
//     }

//     const ret = {
//       _njMobxFormData: true,
//       fieldDatas: new Map(),
//       validate(name) {
//         const oFd = this.fieldDatas.get(name);
//         let value = this[name];
//         switch (oFd.type) {
//           case 'number':
//           case 'integer':
//           case 'float':
//             value = n`value.trim()` !== '' ? +value : '';
//             break;
//           case 'boolean':
//             value = n`value.trim()` !== '' ? Boolean(value) : '';
//             break;
//         }

//         return new Promise((resolve, reject) => {
//           oFd.validator.validate({ [name]: value }, (errors, fields) => {
//             if (errors) {
//               this.error(oFd.message != null ? oFd.message : errors[0].message, name);
//               reject({ errors, fields });
//             } else {
//               this.clear(name);
//               resolve();
//             }
//           });
//         });
//       },
//       error(help, name) {
//         const oFd = this.fieldDatas.get(name);
//         oFd.validateStatus = 'error';
//         oFd.help = help;
//       },
//       clear(name) {
//         const oFd = this.fieldDatas.get(name);
//         oFd.validateStatus = null;
//         oFd.help = null;
//       },
//       reset(name) {
//         this.clear(name);
//         const oFd = this.fieldDatas.get(name);
//         oFd.reset();
//       },
//       add(fieldData) {
//         const {
//           name,
//           value,
//           type = 'string',
//           required = false,
//           message,
//           trigger = 'onChange',
//           ...ruleOptions
//         } = fieldData;
//         const fd = { name, value, type, required, message, trigger, ...ruleOptions };

//         fd.validator = new schema({
//           [name]: {
//             type,
//             required,
//             ...ruleOptions,
//           },
//         });

//         fd.reset = function() {
//           this.value = value;
//         };

//         const oFd = observable(fd);
//         this.fieldDatas.set(name, oFd);

//         extendObservable(
//           this,
//           Object.defineProperty({}, name, {
//             get: function() {
//               return this.fieldDatas.get(name).value;
//             },
//             set: function(v) {
//               this.fieldDatas.get(name).value = v;
//             },
//             enumerable: true,
//             configurable: true,
//           })
//         );
//       },
//       delete(name) {
//         this.fieldDatas.delete(name);
//       },
//     };

//     _children.forEach(fieldData => {
//       fieldData && ret.add(fieldData);
//     });

//     return props && props.observable ? observable(ret) : ret;
//   },
//   { onlyGlobal: true }
// );

// registerExtension('mobxFieldData', options => options.props, { onlyGlobal: true });

// registerExtension(
//   'mobxField',
//   options => {
//     const { value, tagProps } = options;
//     const _value = value();
//     const { prop, source } = _value;
//     const oFd = source.fieldDatas.get(prop);

//     tagProps.validateStatus = oFd.validateStatus;
//     tagProps.help = oFd.help;
//   },
//   { onlyGlobal: true }
// );

registerExtension(
  'class', //注意：指令名称需要使用小写开头的camel命名方式
  options => {
    const {
      tagProps, //指令所在组件的props对象，本例中为{ id: 'test' }
      value, //指令值函数，注意它是个函数需要执行才能取到结果
    } = options;

    //在组件渲染前，使用classNames库来设置className属性的值
    tagProps.className = classNames(
      value() //此处返回例中的{ foo: true, bar: true }
    );
  }
);
