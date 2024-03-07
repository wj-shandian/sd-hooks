---
title: useMemoizedFn
nav: hooks
---

# useMemoizedFn

持久化 函数的 hook 一般情况下 useMemoizedFn 可以替代 useCallback 并且可以省略第二个参数 deps 同时引用函数地址永远不会边

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

## API

`const memoizedFn = useMemoizedFn<T>(fn: T): T;`

### 参数

| 参数 | 说明             | 类型                     | 默认值 |
| ---- | ---------------- | ------------------------ | ------ |
| fn   | 需要持久化的函数 | `(..args:any[]) => void` | -      |

## 解析

每次函数重新 render 的时候 useMemoizedFn 都会获取到最新的 fn，
hook 会返回一个新的函数 并且引用地址不会再变化，
所以不会有闭包问题。
看一些关键代码注释解析

```ts
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
```
