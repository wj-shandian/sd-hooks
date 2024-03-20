---
title: useCountDown
nav: hooks
---

# useCountDown

倒计时管理的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

### 剩余时间

<code src="./demo/demo2.tsx"></code>

### 结束触发回调函数

<code src="./demo/demo3.tsx"></code>

## API

```typescript
const [countdown, formattedRes] = useCountDown({
  leftTime,
  targetDate,
  interval,
  onEnd,
});
```

## 参数

| 参数       | 说明           | 类型     | 默认值 |
| ---------- | -------------- | -------- | ------ |
| leftTime   | 剩余时间 毫秒  | number   | -      |
| targetDate | 目标时间       | TDate    | -      |
| interval   | 倒计时间隔     | number   | 1000   |
| onEnd      | 倒计时结束触发 | ()=>void | -      |

## 返回值

| 参数         | 说明              | 类型         |
| ------------ | ----------------- | ------------ |
| countdown    | 倒计时时间戳 毫秒 | number       |
| formattedRes | 格式化后的倒计时  | FormattedRes |
