import { useRef, useMemo } from 'react';

type noop = (this: any, ...args: any[]) => void;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728 https://github.com/alibaba/hooks/issues/1347
  fnRef.current = useMemo(() => fn, [fn]); // 这行代码确实是无意义的，但是可以避免在 devtool 模式下的异常行为。 也可以直接使用 fnRef.current = fn
  //  // 每次render之后都会获取到最新的 fn
  const memoizedFn = useRef<PickFunction<T>>();
  // 缓存函数 后面再次触发 因为 current 有值 所以不会触发判断
  if (!memoizedFn.current) {
    // 这里会返回一个新的函数 并且这个函数的地址不会再变化
    memoizedFn.current = function (this, ...args) {
      // 执行函数
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}

export default useMemoizedFn;
