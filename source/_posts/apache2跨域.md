---
title: apache2跨域
abbrlink: 4210195828
date: 2020-02-10 21:08:00
tags: [Linux]
---
- 加载服务器组件
```
a2enmod headers
```
- 修改服务器配置

    在想要可以跨域访问的目录下
    ```
    Header set Access-Control-Allow-Origin *
    ```
- 重启服务器

```
service apache2 restart
```
