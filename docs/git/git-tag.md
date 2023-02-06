---
title: git tag
---
## 1. 什么是tag
tag是git版本库的一个标记，指向某个commit的指针。

tag主要用于发布版本的管理，一个版本发布之后，我们可以为git打上 v.1.0.1 v.1.0.2 ...这样的标签。

tag感觉跟branch有点相似，但是本质上和分工上是不同的：

tag 对应某次commit, 是一个点，是不可移动的。
branch 对应一系列commit，是很多点连成的一根线，有一个HEAD 指针，是可以依靠 HEAD 指针移动的。
所以，两者的区别决定了使用方式，改动代码用 branch ,不改动只查看用 tag。

tag 和 branch 的相互配合使用，有时候起到非常方便的效果，例如：已经发布了 v1.0 v2.0 v3.0 三个版本，这个时候，我突然想不改现有代码的前提下，在 v2.0 的基础上加个新功能，作为 v4.0 发布。就可以检出 v2.0 的代码作为一个 branch ，然后作为开发分支。

## 2. tag的简单使用
### 1. 创建tag:
```powersheel
git tag <tagName>
```
### 2. 创建附注标签
```powersheel
git tag -a 标签名称 -m 附注信息
or
git tag -a 标签名称 提交版本号 -m 附注信息
```
:::info 说明
-a : 理解为 annotated 的首字符，表示 附注标签
-m : 指定附注信息
git tag -a 标签名称 -m 附注信息 ：直接给当前的提交版本创建一个 【附注标签】
git tag -a 标签名称 提交版本号 -m 附注信息 ：给指定的提交版本创建一个【附注标签】
:::

### 3. 推送tag到远程仓库:
创建 tag 是基于本地分支的 commit，而且与分支的推送是两回事，就是说分支已经推送到远程了，但是你的 tag 并没有，如果把 tag 推送到远程分支上，需要另外执行 tag 的推送命令。
```powersheel
git push origin <tagName>
```
若存在很多未推送的本地标签，你想一次全部推送的话：
```powersheel
git push origin --tags
```

以上是基于本地当前分支的最后的一个commit 创建的 tag ，但是如果不想以最后一个，只想以某一个特定的提交为tag ，也是可以的，只要你知道commit 的id。
```powersheel
git tag -a <tagName> <commitId>
```

## 3. 查看标签
### 1. 查看本地某个 tag 的详细信息：
```powersheel
git show <tagName>
```
### 2. 查看本地所有 tag：
```powersheel
git tag 或者 git tag -l
```
### 3. 查看远程所有 tag：
```powersheel
git ls-remote --tags origin
```
## 4. 删除标签
### 1. 本地 tag 的删除：
```powersheel
git tag -d <tagName>
```
### 2. 远程 tag 的删除：
```powersheel
git push --delete origin <tagName>
or
git push --delete origin <tagName>
```
两者的区别：
假设我们在仓库中有一个名为 v1.0 的远程标签。我们可以使用带有 --delete 选项的 git push 命令删除远程标签。
```powersheel
git push --delete origin v1.0
```
有时，我们可能有一个与分支同名的标签。在这种情况下，我们需要使用带有 refs 语法的 git push 命令而不是 --delete 选项，如下所示。
```powersheel
git push origin :refs/tags/v1.0
```

### 5.检出标签
检出标签的理解 ： 我想在这个标签的基础上进行其他的开发或操作。
检出标签的操作实质 ： 就是以标签指定的版本为基础版本，新建一个分支，继续其他的操作。
因此 ，就是 新建分支的操作了。
```powersheel
git checkout -b 分支名称 标签名称
```