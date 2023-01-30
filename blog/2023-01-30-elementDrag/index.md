---
slug: elementDrag
title: 多层级元素拖放
authors: jonben
tags: [javascript]
---


正常拖拽文件到指定容器时，如果容器内部没有元素，可以正常响应enter和leave事件，如果内部具有元素，虽然只是在父级别容器时添加的事件，依然会导致子元素误触发，在拖拽时会频繁出现ondragenter和ondragleave事件，原因是冒泡导致。

```html
<li class="box"
    ondragenter="handledragenter()"
    ondragleave="handledragleave()"
    ondrop="drop">
  <span>内部盒子1
    <i>内部盒子2</i>
  </span>
</li>
```

```javascript
function handledragenter() {
  console.log('进入');
}
function handledragleave() {
  console.log('离开');
}
```
从外部移动到内部，事件触发顺序如下:
- enter parent
- enter child
- leave parent
- enter sub-child
- leave child

抓取元素拖拽到容器内时，触发顺序是先enter下一个，再leave上一个，因此一个容器内，触发子元素，判断奇数和偶数即可过滤掉内部的误判断，取一个变量，在enter和leave时都递增，之后判断是奇数还是偶数来决定是否触发事件，最后一次leave后将变量重置为0；

改进：
```javascript
let count = 0
function handledragenter() {
  count++
  if (count % 2) {
    console.log('进入', count);
  }
}
function handledragleave() {
  count++
  if (!(count % 2)) {
    console.log('离开', count);
  }
}
```