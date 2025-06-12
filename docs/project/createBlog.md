---
title: 免费个人博客搭建，使用vuepress和plume主题在github上搭建一个免费的个人博客
createTime: 2025/06/05 08:53:37
permalink: /article/ubvyjyd9/
tags:
  - 个人网站
  - 个人博客
---

做网站是要花钱的，需要买域名，买服务器，然后备案，才可以有一个自己的个人网站，光备案做网站就需要2周到一个月，因此为花大量的时间。

现在我有个方法，你只要使用`vuepress`和`plume主题`，就可以在github上搭建一个免费的个人博客。

完全免费，不需要买域名，也不需要服务器，我已经搭建好了。
这是我的网站，你可以到我的网站上看我的博客：

[https://spionbo.github.io/](https://spionbo.github.io/)

# 搭建教程

下面开始搭建教程：

开发这个项目之前，需要安装一些`软件`或`工具`才能实现开发；下面是一些工具：
需具备一定的编程能力才可以进行个人博客搭建，当然如果按照以下方法，也是可以行的通的。
如果不想自己操作也可以联系我进行搭建。

- Node.js 最新版
- pnpm
- VuePress
- git

## 安装 Node.js
首先去Node.js官方下载安装包安装： [https://nodejs.org/en](https://nodejs.org/en)

![alt text](./images/1.png)

## 安装pnpm
同时按 win+R键，在弹出的运行对话框中输入cmd，打开Windows的命令行：

![alt text](./images/2.png)

按确定。会出一个命令对话匡：

![alt text](./images/3.png)

执行命令：

```bash
npm install pnpm -g
```
## 命令行安装
主题提供了一个 命令行工具，帮助您构建一个基本项目。您可以通过运行以下命令，启动 安装向导。

```bash
pnpm create vuepress-theme-plume@latest
```

启动向导后，您只需要回答几个简单的问题：

```bash
┌  Welcome to VuePress and vuepress-theme-plume !
│
◇  Select a language to display / 选择显示语言
│  简体中文
│
◇  您想在哪里初始化 VuePress？
│  ./my-project
│
◇  站点名称：
│  My Vuepress Site
│
◇  站点描述信息：
│  My Vuepress Site Description
│
◇  是否使用多语言？
│  No
│
◇  请选择站点默认语言
│  简体中文
│
◇  是否使用 TypeScript？
│  Yes
│
◇  请选择打包工具
│  Vite
│
◇  部署方式：
│  Custom
│
◇  是否初始化 git 仓库？
│  Yes
│
◇  是否安装依赖？
│  Yes
│
◇   🎉 创建成功!
│
└  🔨 执行以下命令即可启动：
      cd ./my-project
      pnpm run docs:dev
```

## 启动项目
执行以下命令即可启动：
上一步说明过，其实就是进入你创建的项目，再启动项目:

```bash
  cd ./my-project
  pnpm run docs:dev
```

## 怎么写文章？

这里用的都是`markdown`语法，你可以在`docs/`文件夹下写文章。

`markdown`语法很简单，可以看以下文章：

[markdown写作指南](/article/a8ekvit2/)

---

# 部署，把项目上传到github，拥有自己的网站

## github官方
如果你还没有 Github 的账号，需要注册一个：[Github官方地址](https://github.com/)

## 新建 Github 仓库
注册好后，我们先在 Github 上新建一个仓库，我的仓库就叫：blog。

![alt text](./images/4.png)

「（注意：如果你的博客地址不想要有二级目录（blog），仓库名就叫 <你的用户名>.github.io，具体请看文章最后一段。 ）」

![alt text](./images/5.png)

这里说明一下，如果想要自己的域名，最好是仓库名叫 <你的用户名>.github.io，比如我的：spionbo.github.io，因为我的用户名是 `spionbo`

如果没有按照这种方式，而是按照二级域名（刚刚上面的blog）的方式，需要修改以下数据

```js
export default defineUserConfig({
  base: "/blog",
  lang: "zh-CN",
  title: "小焱",
})
```
二级域名需要将`base`改为`/blog`:

```bash
base: "/blog"
```
如果是以用户名的方式则只需要:

```bash
base: "/"
```

## 部署项目到 Github 仓库

这里我懒的讲怎么改代码之类的了，直接复制以下项目到 Github 仓库即可；以下是项目文件下载地址：

[（个人博客源代码下载地址）](https://pan.quark.cn/s/ebad1f657ad1)

###  提交项目到 github 仓库


将下载好的源代码目录打开，使用cmd进入当前下载的目录下，执行以下命令

如果不会使用git的，可以网上搜索了解一下，当然直接执行下面的方法也是一样的；

```bash
  git init 
  git add .
  git commit -m "first commit"
  git branch -M main
  #把 git@github.com:zhanyd/blog.git 改成你自己的仓库地址
  git remote add origin git@github.com:zhanyd/blog.git
  git push -u origin main

```

提交完代码之后，在github的仓库中看修改Actions下面的信息，如下图：
![alt text](./images/6.png)

然后再去设置Actions中的General

![alt text](./images/7.png)

选择如下图，选择 Read and write permissions

![alt text](./images/8.png)

以上目的就是为了让你发布的时候有权限进行发布，这时候再去修改内容，提交一下，就会自动生成网站了

第次提交的时候可以在Actions中查看你的代码，如以下图，其中`main`为你提交文章保存的地方，`github-pages`用于展示你的网站；这个可以不管。如果想了解需要学习一下`Github`仓库管理；

![alt text](./images/9.png)

以上做完后，就可以查看自己的个人博客了。
个人博客地址可以在`settings -> pages`页面查看；一搬是<你的用户名>.github.io；