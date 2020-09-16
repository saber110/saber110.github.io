---
title: go-get
tags: 网站
abbrlink: 4017356380
date: 2020-09-16 00:00:00
---


## go get 很慢
- 使用国内代理
```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```