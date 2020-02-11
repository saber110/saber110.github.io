---
title: AutoStartInUbuntuMate
abbrlink: 2628694986
date: 2020-02-10 19:30:26
tags: Linux
---
- 只有登录之后ubuntu mate才会联网
```
sudo nano  /usr/share/lightdm/lightdm.conf.d/60-lightdm-gtk-greeter.conf file
```
- 在文件末尾添加
```
[SeatDefaults] greeter-session=lightdm-gtk-greeter autologin-user=username
```