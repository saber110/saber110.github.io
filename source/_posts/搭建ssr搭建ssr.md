---
title: 搭建ssr搭建ssr
tags: ssr
abbrlink: 872076193
date: 2020-02-11 13:12:46
---

### 服务部署
- 脚本
```
yum -y install wget

wget -N --no-check-certificate https://softs.fun/Bash/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```

- 备用脚本：
```
yum -y install wget

wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```
- 脚本安装
需要注意的有
```bash
protocol 最好选择auth_chain_a
obfs(混淆) 千万不要选择tls 有被墙的风险
```
- 添加开机启动
```bash
vim /etc/rc.local

python /usr/local/shadowsocksr/shadowsocks/server.py -c /etc/shadowsocksr/user-config.json a &
```
- 加速服务(BBR)
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh

chmod +x bbr.sh

./bbr.sh
```

- 客户端地址
    + windows
    ```url
    https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases/download/4.7.0/ShadowsocksR-4.7.0-win.7z
    ```
    + linux
    ```bash
    apt-get install python-pip
    pip install shadowsocks
    ```
    + android
    ```url
    https://github.com/shadowsocks/shadowsocks-android/releases/download/v4.5.6/shadowsocks--universal-4.5.6.apk
    ```