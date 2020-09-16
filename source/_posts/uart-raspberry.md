---
title: uart_raspberry
abbrlink: 983467300
date: 2020-02-10 20:00:04
tags: RaspberryPi
---

- 串口配置
```
sudo raspi-config
interface

disable shell and enable hardware
```
- 禁用蓝牙
```
echo "dtoverlay=pi3-disable-bt" >> /boot/config.txt
```
- 禁用串行控制台
串行控制台就是从串口登录树莓派，打开/boot/cmdline.txt
```
#dwc_otg.lpm_enable=0 console=tty1 console=serial0,115200 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles

dwc_otg.lpm_enable=0 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=y
```
注意:打开第一句就是打开串口命令行