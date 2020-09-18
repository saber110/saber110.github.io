---
title: hexo重新搭建
tags: hexo
abbrlink: 318287987
date: 2020-09-18 19:26:30
---

**时光如梭，日月永恒。这个hexo维护真的太费劲了！！！**

## Docker版本可用
- pull
```
docker pull saber110/hexo:v2
```
- 启动
```
docker run --name hexo -p 4000:4000 -v /home/hhb/project/:/home/ -it hexo
```
- 使用
    - 在容器里面跟主机上一样使用
- 提交新容器
    - 登录
    ```
    docker login
    ```
    - 将`container` commit 到image，commit到本地
    ```
    docker commit -a "author" -m "comments" CONTAINERID hexo:v1_TAG
    ```
    - 修改tag
    ```
    docker tag IMAGEID saber110/hexo:v1_TAG
    ```
    - 上传到docker
    ```
    docker push saber110/hexo:v2
    ```
## 以后更新hexo的时候直接安装新环境
## 目前版本信息
- hexo version
```
hexo: 5.2.0
hexo-cli: 4.2.0
os: Linux 4.15.0-30deepin-generic linux x64
node: 14.11.0
v8: 8.4.371.19-node.16
uv: 1.39.0
zlib: 1.2.11
brotli: 1.0.9
ares: 1.16.0
modules: 83
nghttp2: 1.41.0
napi: 6
llhttp: 2.1.2
openssl: 1.1.1g
cldr: 37.0
icu: 67.1
tz: 2020a
unicode: 13.0
```
## 安装新环境
### 安装新的node
- 下载解压
```
wget https://nodejs.org/dist/vx.x.x/node-vx.x.x-linux-x64.tar.xz
tar xf node-vx.x.x.-linux-x64.tar.xz
```
- 我在docker中使用，故将源文件转移
```
mv node-vx.x.x.-linux-x64 /usr/local/src/node
```
- 建立软连接
```
ln -s /usr/local/src/node/bin/node /usr/local/bin/node
ln -s /usr/local/src/node/bin/npm /usr/local/bin/npm
```

### 安装hexo
```
npm install -g hexo-cli
ln -s /usr/local/src/node/bin/hexo /usr/local/bin/hexo
```
## 迁移
### 初始化工程文件夹
```
hexo init blog
npm install
```
### 迁移源文件
- 将原来的`source`拷贝过来
- 将原来的`themes`拷贝过来
- 将原来的`_config.yml`拷贝过来

### 安装本人主题依赖
```
"hexo-abbrlink": "^2.0.5",   //生成文章唯一URL插件
"hexo-baidu-url-submit": "0.0.6",  //url提交插件，用于seo
"hexo-deployer-git": "^1.0.0",  //git插件，用于部署
"hexo-douban": "^1.1.3", //豆瓣读书、电影插件
"hexo-generator-baidu-sitemap": "^0.1.6",  //百度sitemap，用于seo
"hexo-generator-sitemap": "^1.2.0",  // 同上
"hexo-generator-feed": "^1.2.2",  // SSR插件
"hexo-generator-index-pin-top": "^0.2.2",  //用于指定文章置顶
"hexo-generator-search": "^2.4.0",  //本地搜索插件
"hexo-neat": "^1.0.4",  // 压缩js、css代码的插件
"hexo-permalink-pinyin": "^1.1.0",  // 中文链接转拼音的插件
"hexo-related-popular-posts": "^3.0.6",  // 相关文章推荐
"hexo-renderer-ejs": "^0.3.1",  // 是不是自带的？。。。
"hexo-renderer-swig": "^0.3.1",  // 是不是自带的？。。。
"hexo-renderer-marked": "^1.0.1",  // 是不是自带的？。。。
"hexo-renderer-stylus": "^0.3.3",  // 是不是自带的？。。。
"hexo-symbols-count-time": "^0.6.0",  // 站点字数统计
"hexo-tag-cloud": "^2.1.1",  //标签云
"hexo-tag-dplayer": "^0.3.3",  //dplayer视频插件
"hexo-wordcount": "^6.0.1",  // 字数统计插件
"webpack-cli": "^3.3.7",  // 装hexo-abbrlink时提示装的，按需下载
"@webpack-cli/init": "^0.2.2",  // 同上
"hexo-service-worker": "^1.0.1", // 离线访问
```