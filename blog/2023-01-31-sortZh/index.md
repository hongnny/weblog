---
slug: sortZh
title: 中文排序
authors: jonben
tags: [javascript]
---

针对中文的排序，代码如下：

```js
export function localeCompare(arr, key) {
  return arr.sort((a, b) => {
    return new Intl.Collator('zh-Hans-CN', {numeric: true}).compare(a[key], b[key]);
  });
}
```