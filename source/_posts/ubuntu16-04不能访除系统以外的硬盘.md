---
title: ubuntu16.04不能访除系统以外的硬盘
abbrlink: 610628007
date: 2020-02-10 20:47:38
tags: Linux
---
```bash
sudo apt install ntfsfix
sudo ntfsfix /dev/sdb1
```