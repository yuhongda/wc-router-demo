import React, { Ref, useCallback, useState, useEffect } from 'react';
import { CloseOutlined, CloseCircleFilled } from '@ant-design/icons';
import classnames from 'classnames';
import { TreeNode } from './index.d';
import { Props } from './MultiCascader';
import MultiCascaderContainer from './container';
import { prefix } from './constants';

export interface SelectorProps extends Props {
  onRemove: (value: TreeNode) => void;
  onItemClick?: (item: TreeNode | null) => void;
  clickedItem?: TreeNode;
  onClear: () => void;
  forwardRef?: Ref<HTMLDivElement>;
  setUpdatePopupKey?: React.Dispatch<React.SetStateAction<number | null>>;
}

const Tag = (props: {
  onRemove: SelectorProps['onRemove'];
  onItemClick: SelectorProps['onItemClick'];
  clickedItem: SelectorProps['clickedItem'];
  setClickedItem: React.Dispatch<React.SetStateAction<TreeNode | null>>;
  setUpdatePopupKey: React.Dispatch<React.SetStateAction<number | null>>;
  isCurrent: boolean | null;
  item: TreeNode;
}) => {
  const { onRemove, item, onItemClick, setClickedItem, isCurrent, clickedItem, setUpdatePopupKey } = props;
  const handleRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    if (onRemove) {
      onRemove(item);
    }
  };

  const itemStyle = isCurrent
    ? {
        background: '#4796e7',
        color: '#fff',
      }
    : {};

  return (
    <span
      className="ant-select-selection-item"
      style={{ ...itemStyle }}
      onClick={(e) => {
        e.stopPropagation();
        if (onItemClick) {
          if (clickedItem && clickedItem.value == item.value) {
            setClickedItem(null);
            onItemClick(null);
          } else {
            onItemClick(item);
            setClickedItem(item);
          }
          setUpdatePopupKey(+new Date());
        }
      }}>
      <span className="ant-select-selection-item-content">{item.title}</span>
      <span className="ant-select-selection-item-remove" style={{ color: isCurrent ? '#fff' : '#333' }}>
        <CloseOutlined onClick={handleRemove} />
      </span>
    </span>
  );
};

const Selector = (props: SelectorProps) => {
  const {
    onRemove,
    placeholder,
    allowClear,
    onClear,
    forwardRef,
    className,
    disabled,
    data,
    selectAll,
    value,
    onChange,
    okText,
    cancelText,
    selectAllText,
    onItemClick,
    clickItem,
    ...rest
  } = props;
  const { selectedItems, setUpdatePopupKey, clickedItem, setClickedItem } = MultiCascaderContainer.useContainer();

  const handleClear = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      event.stopPropagation();
      if (onClear) {
        onClear();
      }
    },
    [onClear]
  );

  // 用于选择后清除点选状态
  useEffect(() => {
    if (!(value && value?.map((item) => item.slice(-4)))?.includes(clickedItem?.value)) {
      setClickedItem(null);
    }
  }, [value]);

  useEffect(() => {
    setClickedItem(clickItem);
  }, [clickItem]);

  return (
    <div
      className={classnames(prefix, 'ant-select ant-tree-select ant-select-multiple', className, {
        'ant-select-disabled': disabled,
      })}
      ref={forwardRef}
      {...rest}>
      <div className="ant-select-selector" style={{ paddingRight: !disabled && allowClear ? '24px' : undefined }}>
        {selectedItems.length ? (
          selectedItems.map((item) => {
            return (
              <Tag
                key={item.value.toString()}
                onRemove={onRemove}
                clickedItem={clickedItem}
                onItemClick={onItemClick}
                setClickedItem={setClickedItem}
                setUpdatePopupKey={setUpdatePopupKey}
                item={item}
                isCurrent={clickedItem && clickedItem.value == item.value}
              />
            );
          })
        ) : (
          <span className={`${prefix}-placeholder ant-select-selection-placeholder`}>{placeholder}</span>
        )}
      </div>
      {!disabled && allowClear ? (
        <span className="ant-select-clear" onClick={handleClear}>
          <CloseCircleFilled />
        </span>
      ) : null}
    </div>
  );
};

export default Selector;
