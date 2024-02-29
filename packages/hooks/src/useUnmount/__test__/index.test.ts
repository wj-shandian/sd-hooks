import { renderHook } from '@testing-library/react';
import useUnmount from '../index';
describe('useUnmount', () => {
  it('useUnmount should work', async () => {
    const fn = jest.fn(); // jest创建一个函数
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0); // toBeCalledTimes 检测函数被调用的次数
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.unmount(); // 执行写在
    expect(fn).toBeCalledTimes(1); // 执行一次 符合预期
  });
});
