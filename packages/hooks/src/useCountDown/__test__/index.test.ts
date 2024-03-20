import { act, renderHook } from '@testing-library/react';
import useCountDown, { Options } from '../index';

const setup = (options: Options = {}) => {
  return renderHook((props: Options = options) => useCountDown(options));
};

describe('useCountDown', () => {
  // 开始之前初始化jest的系统时间
  beforeAll(() => {
    jest.useFakeTimers({ legacyFakeTimers: false });
    jest.setSystemTime(1479427200000);
  });
  // 结束之后恢复
  afterAll(() => {
    jest.useRealTimers();
  });
  it('当targetDate未定义 那么时间应该被正确的初始化', () => {
    const { result } = setup();
    const [countdown, formattedRes] = result.current;
    expect(countdown).toBe(0);
    expect(formattedRes).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  });
  it('输入预期的targetDate，返回预期的时间', () => {
    const { result } = setup({
      targetDate: Date.now() + 8000,
    });
    const [countdown, formattedRes] = result.current;
    expect(countdown).toBe(8000);
    expect(formattedRes.seconds).toBe(8);
  });
  it('倒计时结束可以触发onEnd函数', () => {
    const onEnd = jest.fn();
    setup({
      targetDate: Date.now() + 5000,
      interval: 1000,
      onEnd,
    });
    act(() => {
      // 模拟时间的流逝 预期时间是 5s 所以6s之后 onEnd 应该被调用
      jest.advanceTimersByTime(6000);
    });
    // 表示 onEnd 是否被调用
    expect(onEnd).toBeCalled();
  });
});
