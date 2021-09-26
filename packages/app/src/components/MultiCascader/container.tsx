import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { createContainer } from 'unstated-next';
import { TreeNode, ValueType } from './index.d';
import {
  transformValue as originalTransformValue,
  flattenTree,
  reconcile,
  sortByTree,
  shallowEqualArray,
} from './utils';
import { All } from './constants';
import { Props } from './MultiCascader';
import { message } from 'antd';

const useCascade = (params?: Props) => {
  const { data, value: valueProp, selectAll, onChange } = params || {};
  const [popupVisible, setPopupVisible] = useState(false);

  const flattenData = useMemo(() => {
    if (selectAll) {
      return flattenTree([
        {
          title: 'All',
          value: All,
          parent: null,
          children: data,
        },
      ]);
    }
    return flattenTree(data || []);
  }, [data, selectAll]);

  const transformValue = useCallback(
    (value: ValueType[]) => {
      const nextValue = value; //originalTransformValue(value, flattenData);

      if (onChange && !shallowEqualArray(nextValue, value)) {
        requestAnimationFrame(() => triggerChange(nextValue));
      }

      return nextValue;
    },
    [flattenData]
  );

  const [menuData, setMenuData] = useState([
    selectAll ? flattenData[0].children! : flattenData.filter((item) => !item.parent),
  ]);

  const [menuPath, setMenuPath] = useState<TreeNode[]>([]);
  const [value, setValue] = useState(transformValue(valueProp || []));
  const hackValue = useRef(value);

  const selectedItems = useMemo(() => {
    return flattenData.filter((node: TreeNode) => {
      return (valueProp || hackValue.current).map((v) => v.slice(-1)[0]).includes(node.value);
    });
  }, [flattenData, valueProp, popupVisible, hackValue.current, value]);

  const triggerChange = useCallback(
    (nextValue: ValueType[]) => {
      if (onChange) {
        onChange(nextValue, selectedItems.slice(0));
      }
      hackValue.current = nextValue;
      setValue(nextValue);
      // setPopupVisible(false);
    },
    [selectedItems]
  );

  const addMenu = useCallback((menu: TreeNode[], index: number) => {
    if (menu && menu.length) {
      setMenuData((prevMenuData) => [...prevMenuData.slice(0, index), menu]);
    } else {
      setMenuData((prevMenuData) => [...prevMenuData.slice(0, index)]);
    }
  }, []);

  const handleCascaderChange = useCallback(
    (item: TreeNode, depth: number) => {
      const { children } = item;
      addMenu(children!, depth + 1);
      setMenuPath((prevMenuPath) => prevMenuPath.slice(0, depth).concat(item));
    },
    [menuPath]
  );

  const handleSelectChange = useCallback(
    (item: TreeNode, checked: boolean, depth: number) => {
      setValue((prevValue) => {
        if (checked && prevValue.length == 20) {
          message.warn('最多选择20个品类');
          return prevValue;
        }
        // return sortByTree(reconcile(item, checked, prevValue, depth), flattenData);
        return reconcile(item, checked, prevValue, depth);
      });
    },
    [flattenData]
  );

  useEffect(() => {
    if (!shallowEqualArray(valueProp, value)) {
      triggerChange(value);
    }
  }, [value]);

  const resetMenuState = useCallback(() => {
    setMenuData([selectAll ? flattenData[0].children! : flattenData.filter((item) => !item.parent)]);
    setMenuPath([]);
  }, [flattenData, selectAll]);

  // 传入的 value 有变更时重新计算
  useEffect(() => {
    if (popupVisible) {
      setValue(transformValue(valueProp || hackValue.current));
      // 这里为了保持下拉框状态先注释掉
      // resetMenuState();
    }
  }, [valueProp, flattenData, popupVisible, resetMenuState]);

  useEffect(() => {
    if (popupVisible) {
      resetMenuState();
    }
  }, [flattenData, popupVisible, resetMenuState]);

  const [updatePopupKey, setUpdatePopupKey] = useState(+new Date());
  const [clickedItem, setClickedItem] = useState<TreeNode | null>(null);

  return {
    menuPath,
    popupVisible,
    setPopupVisible,
    menuData,
    addMenu,
    setMenuData,
    value,
    setValue,
    handleCascaderChange,
    handleSelectChange,
    flattenData,
    resetMenuState,
    selectedItems,
    triggerChange,
    updatePopupKey,
    setUpdatePopupKey,
    clickedItem,
    setClickedItem,
  };
};

export default createContainer(useCascade);
