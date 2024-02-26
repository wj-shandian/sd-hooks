import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

describe('useToggle', () => {
  it('test on init', async () => {
    const hooks = renderHook(() => useToggle());
    expect(hooks.result.current[0]).toBe(false);
  });
  it('test on methods', async () => {
    const hook = renderHook(() => useToggle('Hello'));
    expect(hook.result.current[0]).toBe('Hello');
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toBeFalsy();
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('Hello');
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on optional', () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toBe('World');
    act(() => {
      hook.result.current[1].set('World');
    });
    expect(hook.result.current[0]).toBe('World');
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toBe('Hello');
  });
});
