---
slug: sessionStroage
title: sessionStroage
authors: jonben
tags: [javascript]
---
## 1. 来自MDN的解释
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)

`sessionStorage`属性允许你访问一个，对应当前源的`session Storage`对象。它与`localStorage`相似，不同之处在于`localStorage`里面存储的数据没有过期时间设置，而存储在`sessionStorage`里面的数据在页面会话结束时会被清除。


* 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
* **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，**这点和`session cookies`的运行方式不同。
* 打开多个相同的`URL`的`Tabs`页面，会创建各自的`sessionStorage`。
* 关闭对应浏览器标签或窗口，会清除对应的`sessionStorage`。


## 2. 案例

现有一个页面A，执行下面代码
```js
  window.sessionStorage.setItem('init', '初始化')
```
在A页面有个按钮，点击后通过`window.open(location.href)`打开同源的页面，然后在该页面获取`sessionStorage`
```js
window.sessionStorage.getItem('init') // 初始化
```
结果，我们发现`sessionStorage`在打开新窗口后是可以共享`sessionStorage`的。


接下来我们接着测试

在上次案例打开的`A`页面下继续执行以下代码：
```js
window.sessionStorage.setItem('init', '被修改')
window.sessionStorage.setItem('name', 'jonben')
```

然后在新开的`同源窗口`执行以下代码：
```js
window.sessionStorage.getItem('init') // 初始化
window.sessionStorage.getItem('name') // null
```
结果，我们发现获取`init`的值仍然被修改前的值，而`name`的值确是`null`。

我们现在再回去理解一下MDN的说法：**在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，**。

原来只有在本页面中以新页签或窗口打开的同源页面会`临时共享`之前页面的`sessionStorage`。以后设置的新的`sessionStorage`是不能被共享的。

## 3. 总结

多窗口之间`sessionStorage`不可以共享状态，但是在某些特定场景下新开的页面会复制之前页面的`sessionStorage`！！





