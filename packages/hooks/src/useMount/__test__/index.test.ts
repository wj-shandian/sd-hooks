import { renderHook } from '@testing-library/react';
import useMount from '../index';
describe('useMount', () => {
  it('useMount 可以正常工作', async () => {
    const fn = jest.fn(); // jest创建一个函数
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1); // toBeCalledTimes 检测函数被调用的次数
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount(); // 执行写在
    expect(fn).toBeCalledTimes(1); // 执行一次 符合预期

    renderHook(() => useMount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
