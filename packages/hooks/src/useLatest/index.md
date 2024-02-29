---
title: useLatest
nav: hooks
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

## 代码演示

### 基本用法

使用 useLatest
<code src="./demo/demo1.tsx"></code>

未使用 useLatest
<code src="./demo/demo2.tsx"></code>

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

## 解析

useRef 创建的是一个普通 Javascript 对象，
而且会在每次渲染时返回同一个 ref 对象，
当我们变化它的 current 属性的时候，
对象的引用都是同一个，所以不会有闭包问题

## 问题

- 问题一 为什么要用 useLatest 而不是直接在代码使用 useRef
- 问题二 初始化已经把 value 传给 useRef 了，为什么还需要重新 赋值给 ref.current

### 解析：

首先函数每次 render 之后 整个函数是从头到尾执行一遍的 useRef 也会重新执行，只不过执行的结果是返回的对象没有变化，
还是返回之前已经生成的对象，
在第一次执行的时候已经把 value 传给 useRef 此时 ref.current 的值已经是 value，这个时候看 第二步的赋值是多余的
但是函数是可能会多次 render 的，当再次重新渲染的时候，此时 useRef 虽然执行了 但是返回的是上一次的对象，所以我们需要把最新的 value 赋值给
ref.current 来保持最新值
