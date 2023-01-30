---
slug: computedTime
title: 根据时间戳计算出具体时间
authors: jonben
tags: [javascript]
---

根据给定的时间戳计算出具体时间，代码如下：

### 第一种计算方法

```js
function computedTime(time) {
  // 获取输入时间与今天时间戳的差值
  const duration = new Date().getTime() - time
  // 天
  const d = Math.floor(duration / (24 * 60 * 60 * 1000));
  // 小时
  const h = Math.floor((duration % (24 * 60 * 60 * 1000)) / 3600000);
  // 分钟
  const m = Math.floor((duration % (60 * 60 * 1000)) / 60000);
  // 秒
  const s = Math.floor(duration % (60 * 1000) / 1000);

  return {
    d,
    h,
    m,
    s
  }
}
```

### 第二种计算方法
```js
function computedTime (time) {
  const d = Math.floor(time / (24 * 60 * 60 * 1000));
  const h = Math.floor(time / 3600000) % 24
  const m = Math.floor(time / 60000) % 60
  const s = Math.floor(time / 1000) % 60
  return {
    d,
    h,
    m,
    s
  }
}
```