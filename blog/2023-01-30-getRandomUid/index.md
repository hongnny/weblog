---
slug: getRandomUid
title: 获取一个随机不重复的字符串
authors: jonben
tags: [javascript]
---


### 1. 自己实现

```js
function getGenUID() {
  let date = new Date().getTime();
  let uuid = "xxxxxx4xxxyxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

```

### 2. 还有一个非常好用的库`nanoid`

```js
import { nanoid } from 'nanoid';
const uid = nanoid();
```