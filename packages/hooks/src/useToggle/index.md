---
title: useToggle
nav: hooks
---

# useToggle

用于在两个状态值之间的切换

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx"></code>

### 高级用法

<code src="./demo/demo2.tsx"></code>

## 参数

| 参数         | 说明 | 类型 | 默认值 |
| ------------ | ---- | ---- | ------ |
| defaultValue | 可选 | T    | false  |
| reverseValue | 可选 | U    | 无     |

## result

| 参数   | 说明     | 类型    |
| ------ | -------- | ------- |
| state  | 状态值   | -       |
| action | 操作集合 | Actions |

## Actions

| 参数     | 说明                                                                      | 类型                 |
| -------- | ------------------------------------------------------------------------- | -------------------- |
| toggle   | 切换 state                                                                | ()=>void             |
| set      | 修改 state                                                                | (state:T ｜ U)=>void |
| setLeft  | 设置值为默认值                                                            | ()=>void             |
| setRight | 如果传入了 reverseValue, 则设置为 reverseValue。 否则设置为 默认值 的反值 | ()=>void             |
