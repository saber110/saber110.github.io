---
title: Django学习
tags:
  - 网站
  - python
abbrlink: 479952160
date: 2019-06-15 09:53:24
---

## [](#Django学习 "Django学习")Django学习

1.  创建项目
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">django-admin startproject myprojectname</span>
</pre></td></tr></table></figure>

    项目目录

    *   manage.py 项目管理器，可以通过_python manage.py_查看它所支持的功能
    *   wsgi.py（Python Web Server Gateway Interface)：Python应用与web服务器之间的接口
    *   urls.py 项目的路由配置
    *   settings.py

                *   ALLOWED_HOSTS: 配置允许访问网站的主机
        *   INSTALLED_APPS： 已经安装的应用，当开发自己的应用之后要添加进去
        *   数据库，时区，语言等配置都在这儿
    *   **init.py** 声明该文件夹为模块
2.  创建应用
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">python manage.py startapp appname</span>
</pre></td></tr></table></figure>

    执行完之后记得把应用名添加到settings.py中的INSTALLED_APPS中

应用目录

    *   migrations文件夹: 是一个模块，负责数据迁移；自动生成内容
    *   admin.py: django自带的后台管理模块
    *   apps.py: 本应用的一些配置
    *   models.py: 数据模型，使用ORM框架
    *   tests.py： 自动化测试模块
    *   views.py: 执行响应的代码所在的模块，大部分代码在这儿编写
3.  可以为每个应用产生urls.py，只需要在项目根urls.py中include即可

配置的时候应该注意**正则表达式结束符号$和/**

4.  templates

使用Django默认的DTL引擎，也可以在settings中修改

    *   在APP的根目录下创建templates目录，在templates下面新建**应用文件夹名称相同的目录**A(Django在查找模板的时候会按照INSTALLED_APPS的顺序查找，为了区分同名文件，建立目录A)

        *   在A中创建HTML

        *   在views.py中返回render

1.  编写Model

 一个model对应数据库的一张数据表，django中的model以 **类** 的形式表现，它包含了一些基本字段和数据的一些行为

 使用ORM对象关系映射的模型，是的对象和关系建立映射，不再需要编写SQL语句

    *   在APP根目录下创建models.py，并引入models模块

        *   创建类，并继承models.Model(class yourclassname(models.Model)), 该类就是一张数据表

        *   在类中创建字段

            *   字段即类里面的属性
    *   生成数据表
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
</pre></td><td class="code"><pre><span class="line">python manage.py makemigrations [app_name]</span>
<span class="line">python manage.py migrate</span>
</pre></td></tr></table></figure>
    *   查看数据表

            *   在app/migrations下面的文件里面

                *   可以用
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">python manage.py sqlmigrate 应用名 文件id</span>
</pre></td></tr></table></figure>

            来查看SQL语句

                *   默认的sqlite3的数据库在项目根目录下db.sqlite3，可以通过sqlite expert personal 查看
2.  页面呈现数据在views.py中操作

3.  admin

    *   创建超级管理员
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">python manege.py createsuperuser</span>
</pre></td></tr></table></figure>
    *   配置admin

    在应用下的admin.py中引入自身的models模块，并且注册
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">admin.site.register(models.xxx)</span>
</pre></td></tr></table></figure>
    *   修改数据默认显示的名称

    在models的方法下面添加**str**(sels)或者**unicode**(self)方法
4.  注意

    *   templates中使用的超链接形式
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">&#123;% url &apos;app_name:url_name&apos; param %&#125;</span>
</pre></td></tr></table></figure>
    *   templates过滤器
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">&#123;&#123; value | fliter1 | filter2 &#125;&#125;</span>
</pre></td></tr></table></figure>
    *   Django shell 可以直接与项目交互
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">python manage.py shell</span>
</pre></td></tr></table></figure>