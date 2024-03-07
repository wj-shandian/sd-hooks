---
title: useMount
nav: hooks
---

# useMount

组件初始化渲染时执行 的 hook

## 代码演示

### 基本用法

使用 useMount
<code src="./demo/demo1.tsx"></code>

## API

```typescript
useMount(fn: () => void);
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |

## 解析

没有解析 直接使用 useEffect 也可以 很简单
