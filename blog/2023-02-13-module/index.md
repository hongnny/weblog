---
slug: module
title: ADM,CMD规范
authors: jonben
tags: [javascript, module]
---

## 1. AMD 
AMD全称是Asynchronous Module Definition，即异步模块加载机制。后来RequireJS实现了AMD规范，所以一般说AMD也是指RequireJS。

### 1. RequireJS的基本用法
通过`define`来定义一个模块，使用`require`可以导入定义的模块。
```js
//a.js
// define可以传入三个参数，分别是模块名(字符串)、依赖模块(数组)、回调函数(函数)
define(function(){
    return 1;
})

// b.js
// 依赖要提前书写
define('b', ['a'], function(val){
    return val + 1;
})

// c.js
//数组中声明需要加载的模块，可以是模块名、js文件路径
require(['b'], function(val){
    console.log(val); // 2
});
```

### 2. RequireJS的特点
对于依赖的模块，AMD推崇依赖前置，提前执行。也就是说，在define方法里传入的依赖模块(数组)，会在一开始就下载并执行。å


## 2. CMD
CMD是SeaJS在推广过程中生产的对模块定义的规范，在Web浏览器端的模块加载器中。

### 1. SeaJS的基本用法
```js
define(function(require, exports, module) {
  // 依赖可以就近书写
  const a = require('./a')
  a.doSomething();
  const b = require('./b')
  b.doSomething();
})
```

### 2.SeaJS的特点
对于依赖的模块，CMD推崇依赖就近，延迟执行。也就是说，只有到require时依赖模块才执行。