import { useState, useMemo } from 'react';

export interface Action<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = Boolean>(): [boolean, Action<T>];

function useToggle<T>(defaultValue: T): [T, Action<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Action<T | U>];

// 类型断言的方式将一个值从 unknown 类型转换为 D 类型，并将默认值设为 false 。
function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);
  const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
  const actions = useMemo(() => {
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);
    const toggle = () =>
      setState((preState) => (preState === defaultValue ? reverseValueOrigin : defaultValue));

    return { setLeft, setRight, set, toggle };
  }, []);

  return [state, actions];
}

export default useToggle;
