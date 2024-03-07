import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import useMemoizedFn from '../index';

const useCount = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((c) => c + 1);
  };
  const memoizedFn = useMemoizedFn(() => count);
  return { addCount, memoizedFn };
};

let hook;

describe('useMemoizedFn', () => {
  it('useMemoizedFn可以正常使用', () => {
    act(() => {
      // 渲染hook
      hook = renderHook(() => useCount());
    });
    const currentFn = hook.result.current.memoizedFn;
    // 默认值是0
    expect(hook.result.current.memoizedFn()).toBe(0);

    act(() => {
      // +1
      hook.result.current.addCount();
    });
    // 函数地址相同
    expect(currentFn).toEqual(hook.result.current.memoizedFn);
    // 值为 1
    expect(hook.result.current.memoizedFn()).toBe(1);
  });
});
