---
title: linux下arm-none-linux-gnueabi交叉编译环境的建立
abbrlink: 1573656155
date: 2020-02-10 20:38:30
tags: Linux
---

## arm-none-linux-gnueabi-gcc下载
```
http://www.veryarm.com/arm-none-linux-gnueabi-gcc
```
- 解压文件

- 设置路径
    - 本人下载解压版,所以设置一下环境变量
    ```
    sudo nano /etc/bash.bashrc
    ```
    - 在最后面添加
    ```
    export PATH=$PATH:/path/to/arm-none-linux-gnueabi-gcc/bin
    ```
- 执行
```
source /etc/bash.bashrc
```
- 验证
```
arm-none-linux-gnueabi-gcc -v
```
出现版本号则说明安装成功