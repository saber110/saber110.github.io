---
title: mysqlInstallation
abbrlink: 570379779
date: 2020-02-10 20:03:06
tags: mysql
---

## 问题阐述
最近mysql进行了大面积的更新,内置的数据库存储器换成了mariaDB,但是大公司的更新怎么会没有大坑呢,他们更新完之后在安装过程中不会让你设置root用户的密码,但是密码在哪儿呢,据说是在某个文件里存着(当然这是PC机的特权).

## 方法步骤
- 删除数据库文件
```
rm -r /etc/mysql
```
- 安装
```
spt install mysql_server
```
- 初始化数据库(先别在里面设置root用户的密码)
```
mysql_secure_installation
```
- 登录数据库
```
sudo mysql -u root -p
```
**大坑标注**:必须使用sudo,不使用su权限根本进不去,默认是空密码(对于树莓派)

- 删除原有的root用户
```
DROP USER 'root'@'localhost';
```
- 创建root账户(先别设置密码)
```
CREATE USER 'root'@'%' IDENTIFIED BY '';
```
- 设置root用户权限(设置密码)
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';
```
- 刷新权限表
```
FLUSH PRIVILEGES;
```
- 多说一句

    5.6步如果省略就算更改密码之后也只能用su权限链接,删除重新添加之后就所有用户都可以链接了(迷)