---
title: useTimeout
nav: hooks
---

# useMount

组件初始化渲染时执行 的 hook

## 代码演示

### 基本用法

使用 useTimeout
<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>

## API

```typescript
useTimeout(fn: ()=>void, delay?: number)
```

### 参数

| 参数  | 说明                                                 | 类型         | 默认值              |
| ----- | ---------------------------------------------------- | ------------ | ------------------- |
| fn    | 待执行的函数                                         | `() => void` | -                   |
| delay | 时间 单位为毫秒级别 值为 null undefined 定时器会停止 | `() => void` | number ｜ undefined |

## 解析
