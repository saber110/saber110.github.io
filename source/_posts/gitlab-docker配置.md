---
title: 配置gitlab容器
tags: 网站
abbrlink: 548755248
date: 2021-05-13 00:00:00
---

### docker
- 拉取
```bash
docker pull gitlab/gitlab-ee:12.9.0-ee.0
```
- 配置持久化路径
```bash
export GITLAB_HOME=/srv/gitlab
 
 
docker run --detach \
    --hostname gitlab.huhaobin.cn\
    --publish 150:443 --publish 151:80 --publish 152:22 \
    --name gitlab \
    --restart always \
    --volume $GITLAB_HOME/config:/etc/gitlab \
    --volume $GITLAB_HOME/logs:/var/log/gitlab \
    --volume $GITLAB_HOME/data:/var/opt/gitlab \
    --log-driver none \
    gitlab/gitlab-ee:12.9.0-ee.0
```

### 设置clone端口
- 修改`$GITLAB_HOME/config/gitlab.rb`文件
```bash
// 修改如下语句
external_url 'http://gitlab.huhaobin.cn:151'
 
# https需要下面这句
# nginx['redirect_http_to_https_port'] = 8180
# 这里nginx的监听端口是容器内部的，不使用151
nginx['listen_port'] = 80
 
# 配置151端口，clone时ssh使用的端口
gitlab_rails['gitlab_shell_ssh_port'] = 152
```

### 重启gitlab docker即可