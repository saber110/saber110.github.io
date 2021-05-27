---
title: ajax跨域小结
tags: HTML
abbrlink: 2471479807
date: 2021-05-27 19:09:08
---

--------------
**问题来源于：**
前后端分析的项目中，身份识别与鉴定

## 来源
- 我们需要了解的常识有：session其实也是基于cookie来识别的
- 在项目开发过程中发现前面设置的session，在后面的ajax请求中为null
- 开端调试发现ajax发起请求时默认不发送跨域的cookie，导致session不可用

## 解决方法
### n年前
- 前端ajax中设置
```js
xhrFields: {
    withCredentials:true //默认情况下，标准的跨域请求是不会发送cookie的
},
crossDomain: true,  // 允许跨域
```
- 后端header设置
```php
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:8087'); 
```
**设置完credentials之后，origin要用具体的，不能再使用通配符**

### 2021年
社会大发展，人民更幸福

- chrome对ajax跨域做了非常严格的限制
在设置完前面的内容之后还不够，需要设置`samesite = none`，但是设置完这个只能用`HTTPS`，必须同时设置Secure属性

## JWT