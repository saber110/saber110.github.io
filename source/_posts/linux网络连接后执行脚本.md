---
title: linux网络连接后执行脚本
tags: Linux
abbrlink: 2497004773
date: 2020-02-11 13:11:42
---
在Debian/Ubuntu的发行版本里，网络建立前、后和网络断开前、后都会到/etc/network/里运行相应目录下的脚本
```bash
if-down.d -- 网络关闭前
if-post-down.d -- 网络关闭后
if-pre-up.d -- 网络建立前
if-up.d -- 网络建立后
```
所以把自己的脚本放在`/etc/network/if-up.d/`目录下面就可以了