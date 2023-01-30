---
slug: beforeunload
title: 页面离开时阻止页面刷新
authors: jonben
# authors:
  # name: Gao Wei
  # title: Docusaurus Core Team
  # url: https://github.com/wgao19
  # image_url: https://github.com/wgao19.png
tags: [javascript]
---


js 页面离开后的提示（浏览器提示系统可能不会保存您所做的更改）

阻止页面加载的代码如下：
```js
window.onbeforeunload = function(e) {
  var dialogText = 'Dialog text here';
  e.returnValue = dialogText;
  return dialogText;
};
```