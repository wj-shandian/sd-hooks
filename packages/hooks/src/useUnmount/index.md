---
title: useUnmount
nav: hooks
---

# useUnmount

在组件卸载时执行的 Hook。

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
useUnmount(fn: () => void);
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |

## 解析

使用 useLatest 可以保证函数是最新函数 而不是旧函数 避免出现一些意外情况 个人理解 这个就是增加一些容错率
