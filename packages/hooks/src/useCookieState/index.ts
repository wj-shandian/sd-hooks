import { useState } from 'react';
import Cookies from 'js-cookie';
import useMemoizedFn from '../useMemoizedFn';
import { isString, isFunction } from '../utils';

export type State = string | undefined;

export interface Options extends Cookies.CookieAttributes {
  defaultValue?: State | (() => State);
}

function useCookieState(cookieKey: string, options: Options = {}) {
  const [state, setState] = useState<State>(() => {
    const cookieValue = Cookies.get(cookieKey);
    // 如果默认有值  那么值为默认的
    if (isString(cookieValue)) return cookieValue;
    // 如果是一个函数 那么执行默认函数
    if (isFunction(options.defaultValue)) {
      return options.defaultValue();
    }
    // 其他情况直接返回
    return options.defaultValue;
  });
  const updateState = useMemoizedFn(
    (newValue: State | ((prevState: State) => State), newOptions: Cookies.CookieAttributes) => {
      const { defaultValue, ...restOptions } = { ...options, ...newOptions };
      // 如果 newValue 是一个函数 那么执行函数 并把当前的值传递给它 至于是否使用这个原来的值 主要看使用方
      const value = isFunction(newValue) ? newValue(state) : newValue;
      // 更新value
      setState(value);
      // 如果 为 undefined 那么移除这个cookie
      if (value === undefined) {
        Cookies.remove(cookieKey);
      } else {
        Cookies.set(cookieKey, value, restOptions);
      }
    },
  );
  return [state, updateState];
}

export default useCookieState;
