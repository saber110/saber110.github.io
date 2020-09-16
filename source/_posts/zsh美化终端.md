---
title: zsh美化终端
abbrlink: 2799909634
date: 2020-02-10 20:48:15
tags: Linux
---

本文仅仅为了提升装逼技能
不想装的可以关掉了

- 安装
```
apt install zsh
```
- 安装on-my-zsh配置zsh
```
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```
- 切换终端
```
chsh -s /usr/bin/zsh
```
- 重启机器
```
reboot
```
- 问题
    + zsh没有导入npm的环境
    ```
    nano ~/.zshrc
    export PATH="$PATH:/path/to/your/npm/bin"
    source ~/.zshrc
    ```
- 备注
    - 换回bash
    ```
    exec bash
    ```
    + 切换到zsh
    ```
    exec zsh
    ```