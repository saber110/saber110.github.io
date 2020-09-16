---
title: ajax跨域
abbrlink: 1045120033
date: 2020-02-10 19:09:08
tags: HTML
---
```js
var url = “http://www.huhaobin.cn/yiban/Email/send";

$.ajax({
type: “GET”,
url: url,
data: $(“#ContactForm”).serialize(),
headers: {
‘Access-Control-Allow-Origin’: ‘*’
},
success: function confirm(data)
{
console.log(data);
alert(‘你的老板已经看见了’);
},
error: function del(){
alert(‘你的老板没收到’);
}
});
```

**跨域要加header,并且注意只能用get**