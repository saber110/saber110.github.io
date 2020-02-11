---
layout: ubuntu
title: LTS下安装apache+php+mysql+phpmyadmin
date: 2020-02-10 12:46:20
tags: Linux
---

## ubuntu 14.04 LTS下安装apache+php+mysql+phpmyadmin

转自某博，很好用：
最近重装了ubuntu12.04 LTS，今天也重装了web服务器，顺带记录一下安装过程。

### 环境：ubuntu 12.04 LTS

### 详细步骤：

- 首先以管理员的身份登录。
```bash
sudo su
```
- 安装mysql5（即是数据库）
```bash
apt-get install mysql-server mysql-client
```
注：安装过程中会提示输入密码，记得设置密码再确定。当然，不想设置的话直接过就行了

- 安装phpMyAdmin
```bash
apt-get install phpmyadmin 
```
(话说这种方法安装会自动把下面我介绍到的apache2,php5附带安装）

	注：phpmyadmin会自动安装在/usr/share/phpMyAdmin下，需要将 phpMyAdmin文件夹拷贝到/var/www/html目录下面 (14.04是放在/var/www/html/下，非常重要，不然后面测试不成功) 故使用

	```bash
	sudo cp /usr/share/phpmyadmin/ /var/www/ -a
	```
把文件夹`phpmyadmin`搬到`/var/www/html`目录下即可
或者推荐下面这种用法
(链接目录，用如下命令
```bash
sudo ln -s /usr/share/phpmyadmin/ /var/www/html/
```
注意上面那个不是IN 而是小写的L。就不用移动文件了)

- 安装apache服务器
```bash
apt-get install apache2
```
注：Apache的默认文档根目录是在Ubuntu上的`/var/www`目录，配置文件是`/etc/apache2/apache2.conf`。配置存储在的子目录在`/etc/apache2`目录。一般的网页文件可以直接丢进`/var/www`目录下，在浏览器就可以访问了。默认的是index.html，所以在浏览器地址栏输入`127.0.0.1`或`localhost`就可以访问了

- 安装PHP5和Apache的PHP5的模块
```bash
apt-get install php5 libapache2-mod-php5
```
安装完后重启服务器，
```bash
/etc/init.d/apache2 restart
```
此时可以测试php环境，
```bash
gedit /var/www/info.php，
```
在弹出的文本编辑器里面写入：
```php
<?php    phpinfo();     ?>
```
然后直接在浏览器输入`127.0.0.1/info.php`,就可以看到php的信息了，说明安装成功了

- 让php5获得数据库mysql的支持
```bash
apt-get install php5-mysql php5-curl php5-gd php5-idn php-pear php5-imagick      php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl
```
然后重启服务器，
```bash
/etc/init.d/apache2 restart
```
### 安装phpMyAdmin
```bash
apt-get install phpmyadmin
```
浏览器输入`127.0.0.1/phpmyadmin`就可以看到管理数据库的界面了。

补充：今天发现不知是不是我乱改了密码还是怎样发现登录不了phpmyadmin，后来找到配置文件`/var/www/phpmyadmin/config.default.php`,打开这个配置文件把里面的密码和是否允许空密码登录（改为true）就行了，具体的情况稍微看下这个配置文件就行了，很简单的。