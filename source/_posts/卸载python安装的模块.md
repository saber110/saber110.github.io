---
title: 卸载python安装的模块
abbrlink: 4225763383
date: 2020-02-10 20:51:17
tags: python
---

- pip
使用pip安装的可以用pip卸载
```
pip uinstall ***
easy_install
```
- 使用easy_install安装的可以用easy_install卸载
```
easy_install -m PackageName
setup.py
```
- 通过发行包附带的setup.py安装的模块，首选setup.py提供的uninstall选项。如果作者没有提供uninstall选项，则通过如下命令行手动卸载：
```
1. python setup.py  install --record files.txt
2. 创建del.sh脚本内容
    #!/bin/bash  
    for i in $(less files.txt)  
    do  rm -rf $i  
    done
3. 执行脚本
```