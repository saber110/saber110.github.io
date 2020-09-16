---
title: linux定时执行任务
tags: Linux
abbrlink: 2223700806
date: 2020-02-11 13:07:54
---

## 用户级任务
```bash
crontab -e
```

- 格式
```bash
min hour dayofmonth monthofyear dayofweek  command
```
- 会进行语法检查
## 系统级任务
```bash
nano /etc/crontab
```

- 格式
```bash
min hour dayofmonth monthofyear dayofweek user command
```
- 不会进行语法检查
## 共同点
- 配置之后需要重启crond服务
```bash
service cron restart
```