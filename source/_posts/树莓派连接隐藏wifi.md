---
title: 树莓派连接隐藏wifi
abbrlink: 3907754421
date: 2020-02-10 19:24:55
tags: RaspberryPi
---
- 编辑wifi文件
```bash
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```
- 在该文件最后添加下面的话
```bash
network={
  ssid="WIFINAME"
    scan_ssid=1
  psk="password"
}
```
- 重启
