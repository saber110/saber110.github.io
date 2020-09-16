---
title: ftp_raspberry
abbrlink: 2819274611
date: 2020-02-10 20:17:49
tags: Linux
---

### ftp配置
```
sudo apt-get install vsftpd
sudo nano /etc/vsftpd.conf
#推荐以下配置
# 不允许匿名访问
anonymous_enable=NO
# 设定可以进行写操作
write_enable=YES
# 设定本地用户可以访问
local_enable=YES
ascii_upload_enable=YES
ascii_download_enable=YES
```
```
sudo service vsftpd restart
```
### 重启服务