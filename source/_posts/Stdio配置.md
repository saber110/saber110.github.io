---
title: android Stdio配置
abbrlink: 336607436
date: 2020-02-10 21:17:25
tags: android
---
1. Cause: dl.google.com:443 failed to respond
```
vim ~/.gradle/gradle.properties
```
```
# org.gradle.parallel=true
#Fri Jun 29 10:45:08 CST 2018
#systemProp.https.proxyPort=1080
systemProp.http.proxyHost=127.0.0.1
#systemProp.https.proxyHost=127.0.0.1
systemProp.http.proxyPort=1080
```
2. 创建桌面图标
```
vim  /usr/share/applications/Studio.desktop
[Desktop Entry]
Name = AS
Comment= android studio
Exec=/home/huhaobin/android-studio/bin/studio.sh
Icon=/home/huhaobin/android-studio/bin/studio.png
Terminal=false
Type=Application
```
3. Grant current user access to /dev/kvm
```
chown :$USER /dev/kvm
```