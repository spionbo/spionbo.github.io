---
title: chrome浏览器无法安装扩展
createTime: 2025/06/06 21:34:42
permalink: /article/wue8sxsf/
---

chrome浏览器无法安装扩展，并出现以下几种提示：

程序包无效：`CRX_REQUIRED_PROOF_MISSING`

该扩展程序未列在 Chrome 网上应用店中，并可能是在您不知情的情况下添加的

扩展的按钮开关为灰色，无法启用

![alt text](1.png)

下面以安装 `油小猴工具箱` 扩展为例，提供 2 种解决方法：

## 方法一（推荐）：

下载 [Chrome和Edge策略文件.zip](https://pan.quark.cn/s/8a6b5734c68d) (opens new window)并解压，得到 chrome.adm 文件。

![alt text](2.png)

按 `Win+R` 键打开运行，输入 `gpedit.msc` 确定，进入本地组策略编辑器。

![alt text](3.png)

点击 计算机配置 -> 管理模板，右键菜单 添加/删除模板 -> 添加，选择刚才解压的 chrome.adm 文件，然后关闭对话框即可。

![alt text](4.png)

在 管理模板 下找到 经典管理模板(ADM) -> Google -> Google Chrome -> 扩展程序

![alt text](5.png)

双击 配置扩展程序安装许可名单，将其改为【已启用】，然后点击【显示】进入白名单列表。

![alt text](6.png)

找到无法开启的应用，复制不可用的扩展ID，例如：`edjmlggggbhakhfmkbffngikmionpolh` 填入白名单中，然后点击确定。

![alt text](7.png)

重启 Chrome 浏览器后扩展即可正常使用。

![alt text](8.png)

## 方法二：

**注意**
此方法安装的扩展有几率会在下次打开浏览器时被自动删除，推荐方法一。

将扩展文件后缀由 crx 改为 zip，把 zip 文件拖动到扩展管理页面。（若拖动没反应，请刷新本页）

![alt text](21.png)

![alt text](22.png)

若依然无效，则解压 zip 文件，回到浏览器扩展页面，点击【加载解压缩的扩展】按钮，选择刚才解压的文件夹，扩展安装成功。

![alt text](23.png)