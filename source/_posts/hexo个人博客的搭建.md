---
title: hexo个人博客的搭建
abbrlink: 139679387
date: 2020-02-10 19:26:30
tags: hexo
---
## 搭建
- 最讨厌的就是原封不动的抄别人,所以我直接用别人的
```
http://hifor.net/2015/07/01/%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-hexo-github/
```
备注: window10/windows8/Linux 均可以
搭建在本地进行测试
- 在source目录下面新建CNAME文件,内容为自己独立的域名
- 在弄完解析之后就可以通过自己的域名访问了

- markdown 书写语法
```
http://www.jianshu.com/p/q81RER
```
- sublime text markdown 插件
```
http://www.jianshu.com/p/aa30cc25c91b
```
- 写作
    - 在./source/_posts里面新建.md文件,用markdown语法写文件

    - 更新到git pages
    ```
    1. hexo clean #清除hexo缓存
    2. hexo g     #产生静态文件
    3. hexo s     #开启本地服务器以供测试
    4. hexo d     #将网站上传到git,进行远程使用
    ```
    - 使用分类和标签功能

        * 新建分类
        ```
        hexo new page categories
        ```
        执行完之后会在source/categories里面生成index.md
        里面的内容应该完善为
        ```
        ---
        title: 未分类
        date: 2017-09-30 13:28:39
        type: "categories"
        ---
        ```
        - 新建标签
        ```
        hexo new page tags
        ```
        执行完之后会在source/tags里面生成index.md
        里面的内容应该完善为
        ```
        ---
        title: 未分类
        date: 2017-09-30 13:28:39
        type: "tags"
        ---
        ```