---
title: go get
tags: 网站
abbrlink: 4017356380
date: 2020-09-16 00:00:00
---


## go get 很慢

```BASH
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
*可能会引起`go: cannot find main module`*，此时需要关闭代理
```
go env -w GO111MODULE=off
```

#### go 源文件要放在GO的src下面