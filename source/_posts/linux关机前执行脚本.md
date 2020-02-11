---
title: linux关机前执行脚本
abbrlink: 2766769718
date: 2020-02-10 21:22:15
tags: Linux
---

1. 建立关机需要执行的脚本文件
```
sudo vim /etc/init.d/K99shutdownbefore.sh
```
K99文件名用来保证运行优先级

2. 赋予执行权限
```
sudo chmod +x /etc/init.d/K99shutdownbefore.sh
```
3. 创建关机和重启软连接
```
sudo ln -s /etc/init.d/K99shutdownbefore.sh  /etc/rc0.d/K99shutdownbefore
sudo ln -s /etc/init.d/K99shutdownbefore.sh  /etc/rc6.d/K99shutdownbefore
```