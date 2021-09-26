import React, { useState, useRef, useEffect, useCallback } from 'react';

/*
  * https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
  * 防止父组件传给子组件的事件函数，因内部依赖的 state 变化了而变化，并产生的新函数传给子组件，导致子组件 rerender
  * 实例见 src/pages/GoodsMonitor/list.tsx 
*/
export function useEventCallback(fn, dependencies) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback((...args) => {
    const fn = ref.current;
    return fn(...args);
  }, [ref]);
}

/*
  * 父传子 函数A，而函数A又依赖于 state 变化时使用此函数避免因依赖值变化导致函数A变化；
  * 使用此函数应与 useCallback 一起使用
*/
export function useRefProps(props) {
  const ref = useRef(props);
  // 每次渲染更新props
  useEffect(() => {
    ref.current = props;
  });

  return ref;
}
