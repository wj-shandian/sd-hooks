import { renderHook, act } from '@testing-library/react';
import useLatest from '../index';

const setState = (val) => renderHook((state) => useLatest(state), { initialProps: val });

describe('useLatest', () => {
  it('带有基本变量的useLatest可以工作', async () => {
    const { result, rerender } = setState(0);
    rerender(1); // 重新渲染 接收一个值
    expect(result.current.current).toBe(1);
    rerender(2);
    expect(result.current.current).toBe(2);
    rerender(3);
    expect(result.current.current).toBe(3); // toBe 是
  });

  it('带有引用变量的 useLatest 应该可以工作', async () => {
    const { result, rerender } = setState({});
    rerender({});
    expect(result.current.current).toEqual({}); // toEqual 等同于
    rerender([]);
    expect(result.current.current).toEqual([]);
  });
});
