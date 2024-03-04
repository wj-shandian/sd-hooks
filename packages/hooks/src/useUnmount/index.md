---
title: useUnmount
nav: hooks
---

# useUnmount

在组件卸载时执行的 Hook。

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

### 错误对照

<code src="./demo/demo2.tsx"></code>

## API

```typescript
useUnmount(fn: () => void);
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |

## 解析

使用 useLatest 可以保证函数是最新函数 而不是旧函数, 避免闭包问题导致一些问题

举个例子，我在 useEffect 中直接返回一个函数 并且函数中使用到了 state 值 当 state 的值发生了变化 然后再卸载组件时 触发了 函数，此时
可以发现 这个 state 不是最新的 state，所以 用 useLatest 可以解决这个问题

可以查看上面错误对照的例子
