---
title: useThrottleFn
nav:
nav: hooks
---

# useThrottleFn

用来处理节流函数的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

### 立即执行

<code src="./demo/demo2.tsx"></code>

## API

```typescript
const { run, cancel, flush } = useThrottleFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

## 参数

| 参数    | 说明                   | 类型                 | 默认值 |
| ------- | ---------------------- | -------------------- | ------ |
| fn      | 目标函数               | (...args:any[])=>any | -      |
| options | 节流行为控制的一些参数 | Options              | -      |

## Options

| 参数     | 说明                 | 类型      | 默认值 |
| -------- | -------------------- | --------- | ------ |
| wait     | 等待时间             | `number`  | `1000` |
| leading  | 在延迟开始前调用函数 | `boolean` | `true` |
| trailing | 在延迟开始后调用函数 | `boolean` | `true` |

## 返回结果

| 参数   | 说明                               | 类型                      |
| ------ | ---------------------------------- | ------------------------- |
| run    | 触发执行 fn，函数参数将会传递给 fn | `(...args: any[]) => any` |
| cancel | 取消当前节流                       | `() => void`              |
| flush  | 当前节流立即调用                   | `() => void`              |

## 解析

主要是用 lodash throttle 来实现效果，使用 useLatest 来保持函数最新值，然后 lodash 的 run cancel 以及 flush 函数提供使用
