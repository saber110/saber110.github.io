---
title: Docker学习
tags:
  - linux
abbrlink: 1736621667
date: 2019-07-07 20:02:02
---

## [](#Docker "Docker")Docker

### [](#安装 "安装")安装

### [](#运行 "运行")运行

`docker run -it --name  container_name image_id [cmd]`

1.  启动容器

`docker start -ai container_name`

2.  链接到容器

`docker attach container_name`

1.  给运行着的容器执行.sh

`docker exec /path/to/shell.sh`

`docker exec -it mysql bash`  用命令行链接到mysql容器

### [](#生成镜像 "生成镜像")生成镜像

`docker commit -a &quot;author&quot; -m &quot;comments&quot; container_name image_name:TAG`

### [](#提交镜像 "提交镜像")提交镜像

1.  修改正式的TAG

`docker tag IMAGEID(镜像id) REPOSITORY:TAG（仓库：标签）`

2.  提交

`docker push  REPOSITORY:TAG`

### [](#协同使用 "协同使用")协同使用

1.  先以服务态启动子容器

`docker run -d --name db training/mysql`

2.  启动父容器，并用link参数链接子容器。只能父容器访问子容器里面的数据

`docker run -d -P --name web --link db:db training/webapp python app.py`

‘db:db’： 子容器名字：别名