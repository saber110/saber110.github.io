---
title: qt使用mysql
abbrlink: 12354587
date: 2020-02-10 20:52:34
tags: Qt
---

## Qt使用mysql
- 虽然qt自己编译生成了libmysqlclient.so,但是这个文件还依赖于系统的libmysqlclient.so.18，但是很多主机都没有安装这个

- 查看缺少的文件
```
cd /the/path/to/libmysqlclient.so
ldd libmysqlclient.so
```
- 下载
```
https://dev.mysql.com/downloads/connector/c/
```
- 复制
```
cp libmysqlclient.so.18 /usr/lib
```
- 使用
重新编译工程并使用