---
slug: fileSlice
title: 文件分片和合并
authors: jonben
tags: [javascript]
---

文件分片和合并，代码如下：

```js
 const ipt = document.getElementById('file')
  // 确定分片的大小
  const sliceSize = 128 * 1024;
  
  ipt.onchange = function() {
    const file = ipt.files[0]
    const size = file.size;
    let start = 0
    let arr = [];
    let run = true
    while(run) {
      let sliceBlob = file.slice(start, start + sliceSize)
      arr.push(sliceBlob)
      start = start + sliceSize
      if (start >= size) run = false;
    }
    // 合并分片数据为文件并下载文件
    const blob = new Blob(arr.slice, {type: file.type});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = true
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
```