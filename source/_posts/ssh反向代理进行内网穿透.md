---
title: ssh反向代理进行内网穿透
tags: Linux
abbrlink: 967289922
date: 2020-02-11 13:01:14
---

### 公网主机配置
- 修改sshd的配置文件，
```bash
nano /etc/ssh/sshd_config
```
在最后面添加GatewayPorts yes,重启sshd
```
service sshd restart
```
作用：设置反向代理的ip是**0.0.0.0**，而不是127.0.0.1

### 内网主机配置
- 命令格式
```bash
ssh -NfR <公网端口>:<要代理的ip>:<要代理的端口> <用户名>@公网主机ip (-i /path/to/privatekey)
```
```bash
-N：ssh不执行命令
-f：后台执行
-R：反向代理
private key 应该是600权限
```
- 查看是否启动，在公网主机上执行
```bash
netstat -tnl|grep <公网端口>

tcp        0      0 0.0.0.0:<公网端口>            0.0.0.0:*               LISTEN
tcp6       0      0 :::<公网端口>                 :::*                    LISTEN
```
说明执行成功

### 免密，稳定通道
- 免密
在内网主机上执行
```bash
ssh-copy-id <用户名>@公网主机ip
```
- 稳定通道(两种方法)

    - autossh
    ```bash
    apt-get install autossh
    autossh -M 2333 <公网端口>:<要代理的ip>:<要代理的端口> <用户名>@公网主机ip (-i /path/to/publickey)
    ```
    -M : 回显测试

    - ssh心跳包
        + 单独客户设置（方法1）
        修改`/etc/ssh/ssh_config`，添加
        ```bash
        ServerAliveInterval 60
        ServerAliveCountMax 9999999999
        ```
        + 服务器设置（方法二）{新客户端可以不用设置，服务器负责维护}
        `sudo vim /etc/ssh/sshd_config`
        `# 添加`
        ```bash
        ClientAliveInterval 30
        ClientAliveCountMax 6
        ```