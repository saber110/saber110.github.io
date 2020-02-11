---
title: Fatal error Class 'ZipArchive' not found ......
tags: Linux
abbrlink: 2909455182
date: 2020-02-10 14:33:28
---

#### 史上最强悍的解决方案
```bash
ubuntu : sudo apt-get install php7.0-zip
```
#### 下面是装逼
- 在Linux下没有php_zip.dll这个文件（有也不会起作用的），所以需要重新编译一下php的zip模块。具体安装方法如下：
```bash
cd /usr/src
wget http://pecl.php.net/get/zip
tar -zxvf zip
cd zip-1.x.x
phpize
./configure
make
sudo make install
```
安装完之后，屏幕上会提示zip.so的位置。然后将其记录下来，如：`/usr/lib/php/20151012/zip.so`

- 使用root权限修改php.ini（通常可能会在/usr/local/lib/文件夹下，不过视当初安装php而定，可以通过phpinfo()来查看）：
- 增加
```bash
extension = /usr/local/lib/php/extensions/zip.so
```
然后同样在php.ini文件中，将
```bash
zlib.output_compression = Off
```
改为
```bash
zlib.output_compression = On
```
- 最后别忘了重启一下Apache：
```bash
sudo service apache2 restart
```
