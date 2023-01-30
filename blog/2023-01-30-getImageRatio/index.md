---
slug: getImageRatio
title: 计算图片等比缩放后的宽高
authors: jonben
tags: [javascript]
---
根据图片的宽度等比缩放图片到一定的比例，代码如下：
```js
function getImgScaleRect(url, maxWidth = 200, maxHeight = 300) {
  // 图片的宽
  let width = ((/imageHeight=(?<width>\d+)/.exec(url) || {}).groups || {}).width;
  // 图片的高
  let height = ((/imageWidth=(?<height>\d+)/.exec(url) || {}).groups || {}).height;
  // 比例
  let b1 = width / maxWidth;
  let b2 = height / maxHeight;
  if (b1 <= 1 && b2 <= 1) {
    // width = width;
    // height = height;
  } else if (b1 <= 1 && b2 > 1) {
    width = width / b2;
    height = maxHeight;
  } else if (b1 > 1 && b2 <= 1) {
    width = maxWidth;
    height = height / b1;
  } else if (b1 > 1 && b2 > 1) {
    let b = b1 > b2 ? b1 : b2; // 取比例大的
    width = width / b;
    height = height / b;
  }
  return {
    width: width + 'px',
    height: height + 'px'
  };
}
```