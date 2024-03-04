---
title: useTitle
nav: hooks
---

# useTitle

用于设置页面标题。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
useTitle(title: string, options?: Options);
```

### Params

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| title | 页面标题 | `string` | -      |

### Options

| 参数             | 说明                               | 类型      | 默认值  |
| ---------------- | ---------------------------------- | --------- | ------- |
| restoreOnUnmount | 组件卸载时，是否恢复上一个页面标题 | `boolean` | `false` |

## 解析

比较简单，直接修改 `document.title` 即可。 开始时存入 之前的 title 卸载时加入判断 如果需要直接恢复。
