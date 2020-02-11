---
title: sizeof与strlen的区别
abbrlink: 2422235321
date: 2020-02-10 21:21:15
tags: C语言
---
- sizeof是一个操作符,结果类型是size_t，它在头文件中typedef为unsigned　int类型。该类型保证能容纳实现所建立的最大对象的字节大小.而strlen是一个库函数,使用需要包含<string.h>头文件.
- sizeof的参数可以是数据类型或变量,而strlen函数只能以结尾为’\0’的字符串的作为参数.
- sizeof后如果是类型必须加括弧，如果是变量名可以不加括弧。这是因为sizeof是个操作符不是个函数
- 编译器在编译的时候就计算出了sizeof的结果.而strlen函数必须在运行的时候才能计算出来.
- sizeof计算的是数据类型占用的内存的大小,而strlen计算的字符串实际的长度,不包括’\0’;
- 数组作为sizeof的参数不会退化,而作为strlen的参数的时候会退化为一个字符指针.
