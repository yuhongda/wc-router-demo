import React, { useEffect, useState} from 'react';
import { Form, Cascader  } from 'antd';
import * as api from '@/requests/pages/myReport';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .category-Cascader .ant-cascader-menu {
    min-height: 180px;
    max-height: 300px;
    height: auto;
  }

  .category-Cascader .selectDisabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    font-weight: normal!important;

    &:hover {
      font-weight: normal!important;
    }
  }

  .category-Cascader .cateLabel {
    display: inline-block;
  }
`;

function rmEmptyChildrenAttr(nodes) {
  if (nodes && nodes.length) {
    nodes.forEach((node, i) => {
      if (node.children) {
        if (node.children.length) {
          rmEmptyChildrenAttr(node.children);
        } else {
          const { children, ...otherPropsObj } = node;
          nodes[i] = otherPropsObj;
        }
      }
    });
  }
}

const fieldNames = {
  label: '_label',
}
const defaultRules =  (rule, value, callback)=> {
  callback();
};
// 使用见 其他功能-洞察数据修正
const CategoryCascader = ({onChange, label, name, rules, ...props}) => {
  const _name = name || '';
  const _label = label || '品类';
  const _rules = rules || defaultRules;
  
  const [options, setOptions] = useState([]);

  const setDisabled = (item, index) => {
    if (item.children && item.children.length) {
      ++index;
      item.children.map((_item)=> {
        _item._disabled = !!(index === 3 && !_item.ifAuth);
        _item._label = (
          <div className={`cateLabel ${_item._disabled ? 'selectDisabled' : ''}`}>{_item.label}</div>
        );
        setDisabled(_item, index);
      });
    }
  }

  const displayRender = (labels, selectedOptions) => {
    if (!labels.length || labels.length !== selectedOptions.length) {
      return '';
    }
    if (selectedOptions.length && selectedOptions[selectedOptions.length - 1]._disabled) {
      return;
    }
    const text = labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
            `${option.label}`
        );
      }
      return (`${option.label} / `);
    }).join('');
    return <span title={text}>{text}</span>;
  }

  const onCategoryChange = (value, selectedOptions) => {
    if (selectedOptions.length && selectedOptions[selectedOptions.length - 1]._disabled) {
      onChange([]);
      return;
    }
    // switch (value.length) {
    //   case 0:
    //   case 3:
    //   case 4:
    //     onChange(value);
    // }
    onChange(value);
  };

  const filter = (inputValue, path)=> {
    console.log(inputValue, path)
    // 会报错
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  useEffect(() => {
    // @TODO: 数据可以放 store里，不必老是请求
    api.getCategoryList().then((res)=> {
      if (res.data.success) {
        const data = res.data.data;
        rmEmptyChildrenAttr(data);
        data.map((item)=> {
          item._label = (
            <div className="cateLabel">{item.label}</div>
          );
          setDisabled(item, 1);
        });
        setOptions(data);
      }
    })
  }, []);

  return (
    <Form.Item label={_label} name={_name} rules={_rules}>
      <GlobalStyle />
      <Cascader 
        popupClassName="category-Cascader" 
        expandTrigger="hover" 
        options={options} 
        fieldNames={fieldNames} 
        displayRender={displayRender} 
        onChange={onCategoryChange} 
        // showSearch={ filter }
        changeOnSelect
        {...props} 
      />
    </Form.Item>
  )
}

export default CategoryCascader;
