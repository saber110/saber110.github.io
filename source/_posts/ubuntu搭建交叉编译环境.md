---
title: ubuntu搭建交叉编译环境
tags:
  - 未分类
  - 交叉编译
abbrlink: 2624931580
date: 2017-09-30 16:43:22
---

1.*** mixed implicit and normal rules: deprecated syntax
  修改Makefile 452 修改后：
  %config: scripts_basic outputmakefile FORCE