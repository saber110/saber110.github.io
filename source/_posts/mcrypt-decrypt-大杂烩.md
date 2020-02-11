---
title: linux配置Call to undefined function mcrypt_decrypt()+大杂烩
tags: Linux
abbrlink: 1770279608
date: 2020-02-10 14:37:00
---
- php5.4 ubuntu14.04
```bash
$ sudo php5enmod mcrypt
$ sudo service apache2 restart
```
- php7.0 ubuntu16.04
```bash
sudo apt php-mcrypt
sudo phpenmod mcrypt
sudo service apache2 restart
```
- ubuntu安装curl
```bash
sudo apt-get install php-curl
```
更改php.ini 开启`curl(/etc/php/7.0/apache2/php.ini)``
重启apache2
```
sudo service apache2 restart
```
- php gd库的安装
```bash
sudo apt install php gd
```
更改php.ini 开启curl(`/etc/php/7.0/apache2/php.ini`)重启apache2
```bash
sudo service apache2 restart
```
- ubuntu 开启对.htaccess的支持
```bash
sudo a2enmod rewrite
```
配置`/etc/apache2/apache2.conf`
```bash
AccessFileName .htaccess
<Directory /var/www/html>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
</Directory>
```
```bash
sudo service apache2 restart
```
- mysql自增起始值设置
```bash
alter table users（表名） AUTO_INCREMENT=10000（起始值）;
```
- ssl https配置
```bash
http://www.linuxidc.com/Linux/2015-02/113588.htm
```