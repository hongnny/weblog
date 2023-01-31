---
slug: rem
title: rem
authors: jonben
tags: [javascript]
---

## 1. rem

`rem`是相对于根元素`html`的`font-size`，这样就意味着，我们只需要在根元素的`font-size`确定一个参考值，这个参考值设置为多少，完全可以根据您自己的需求来定。

## 2.rem换算

假如：我们设计稿宽度是`750px`，现在我们希望当`1rem`代表`100px`的时候， 即`7.5rem`代表`750px`，我们就需要设置根元素的`font-size`为`100px`，即：

```powersheel
7.5rem * 100 = 750px //100纯粹是为了好计算
```

这时候假设屏幕宽度是`750px`,我们让根元素的`font-size`为`100px`，则下面等式成立
```powersheel
=> 7.5rem * fontSize = 屏幕宽度（750px）
=> fontSize = 屏幕宽度（750px）/ 7.5rem = 100px;
=> fontSize = 屏幕宽度/(设计稿宽度（750）/ 100) = 屏幕宽度/设计稿宽度（750）* 100
```

所以当我们屏幕宽度是`750px`的时候，其根元素的`font-size`为`100px`

当屏幕宽度变化为`1200px`的时候，其根元素的`font-size`为`160px`

这就实现了当屏幕宽度变化的情况下，让我们的布局来自动适应屏幕的大小

## 3.得到一下计算根元素`font-size`的函数， 代码如下：
```js
window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(720,100)
};
window.onresize = function(){
    getRem(720,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
    //html.style.fontSize = oWidth/(pwidth/prem) + "px";
}
```