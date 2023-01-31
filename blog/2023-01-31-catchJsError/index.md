---
slug: catchJsError
title: js收集错误日志
authors: jonben
tags: [javascript]
---

js收集错误日志，代码如下：

```js
// 收集页面错误日志
window.addEventListener('error', evt => {
  
});
// 收集promise错误日志
window.addEventListener('unhandledrejection', evt => {
  
});
// 收集Vue的错误日志
Vue.config.errorHandler = (err, vm, info) => {
  
};
```