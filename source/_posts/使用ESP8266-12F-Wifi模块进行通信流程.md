---
title: 使用ESP8266-12F_Wifi模块进行通信流程
tags: 硬件
abbrlink: 3334855695
date: 2020-02-10 14:52:04
---

使用ESP8266-12F Wifi模块进行通信的套路体会
###一、接线流程

在最初测试时，可使用usb转ttl串口进行接线，接线流程比较简单。将模块VCC，EN端接3.3V电源，GPIO15,GND端接地，模块TX,RX端分别接串口工具的RX,TX端，其余管脚悬空既可。

##### 在接线过程中注意点如下。

用3.3V/800mA独立电源供电，需要共地。

保证CH_PD（EN） 也就是芯片选通脚为高电平，GPIO15(也就是MTDO)为低电平。并且CH_PD端与独立电源之间，GPIO15与地之间，需要分别连接阻值为10k的电阻。（如原理图所示）。

注：RST 引脚低电平复位，不需要可以悬空。GPIO0在下载固件时需要拉低。

###二、调试流程

##### 命令在后面必须要有**回车**发送，
调试使用*AT*指令。以下简单介绍四种模式的调试流程。

- 模块ap模式下做 tcp server
```C
AT+CWMODE=2或AT+CWMODE=3       //开启 AP 模式
AT+RST                         //复位
AT+CWSAP="TEST","123456789A",3,0 //设置模块的 wifi 和密码
AT+CIPMUX=1                     //打开多连接
AT+CIPSERVER=1,8080           //1表示开启server模式，8080为端口号
AT+CIPSTO=7200                 //设置服务器超时时间为7200s
AT+CIPSEND=0,10 //进入数据发送模式为十个字节,即可发送数据
```

- 模块sta模式下做 tcp client
```C
AT+CWMODE=1   //开启STA模式
AT+RST //复位
AT+CWLAP //查看附近的 wifi
AT+CWJAP="TEST","123456789A" //连接 wifi, 后面为密码
AT+CIFSR //查看模块的分配的 ip
AT+CIPMUX=1 //打开多连接
AT+CIPSTART=0，"TCP","192.168.4.1",8080 设置ip和端口号，发送 AT 指令去连接。
AT+CIPSEND=0,10 //进入数据发送模式为十个字节,即可发送数据
```
- 模块做tcp透传
```C
AT+CWMODE=1   //开启STA模式
AT+RST //复位
AT+CWLAP //查看附近的 wifi
AT+CWJAP="TEST","123456789A" //连接 wifi, 后面为密码
AT+CIFSR //查看模块的分配的 ip
AT+CIPMUX=0//设置单连接
AT+CIPMODE=1//设置透传模式
AT+CIPSTART="TCP","192.168.4.1",8080// 连接server端的ip和端口
AT+CIPSEND //开始发送数据
+++ //退出透传，此处应取消发送新行
```
- 模块做udp透传
```C
AT+CWMODE=1   //开启STA模式
AT+RST //复位
AT+CWLAP //查看附近的 wifi
AT+CWJAP="TEST","123456789A" //连接 wifi, 后面为密码
AT+CIFSR //查看模块的分配的 ip
AT+CIPSTART=“UDP”,"255.255.255.255",8080,8080,0//建立udp连接，前8080为对方端口，后8080为模块端口
AT+CIPMODE=1//设置透传模式
AT+CIPSEND //开始发送数据
+++ //退出透传，此处应取消发送新行
```
##### 使用串口助手对单个wifi模块进行测试，注意事项如下。
- 配置模式为波特率：115200、数据位：8 校验位/停止位/流控：none
- 使用AT指令进行调试时，记住发送指令时要勾选“发送新行选项”。即指令需要换行（0x0d+0x0a）
##### 使用两个wifi模块进行通讯形式如下。
###### 服务器与客户端进行tcp通信
- 按之前的步骤，将两模块分别设置成tcp server与tcp client即可实现双向通信。
- 该模式下，两模块间传输数据需要限定长度。
- 若客户端连不进服务器的热点，服务器应该执行_复位_指令，等待一段时间即可。
- 掉电后会自动退出server模式，需要重新初始化，初始化AT指令流程截图如下。
- 客户端掉电，服务器未掉。上电后只初始化客户端，依然不能实现数据双向传输。服务器需要关闭 server收发模式再重新开启，即可解决问题。
- 恢复出厂设置指令：`AT+RESTORE`
###### 进行tcp透传
- 将一个模块设置成tcp server，另一个按照tcp透传进行调试即可。
- 透传只能在单连接模式下进行，所以在建立连接之前一定要用（AT+CIPMUX=0 设置单连接），但是模块处于服务器模式下时，必须要多链接，由于冲突，所以模块开启服务器模式不能做tcp透传。因此，该模式下，客户端像服务器发送数据可不限长度，服务器发送数据则需要限定长度。
- 其他调试方法同上。
###### 进行udp透传
- 需要外界提供wifi热点
- 将两个wifi模块连接至统一wifi热点，按照udp透传进行调试。
- 对于建立udp连接的指令，如需要实现多端通信，则ip地址应输入广播域“255.255.255.255”，并需要设为同一端口。
###### 使用单片机发送指令至wifi模块，使用uart通信协议。
1. 非透传模式

- 服务器初始化代码如下。
```C
void Wifi_ServerInit() //服务器初始化
{
  printf("AT+CIPMUX=1");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
  printf("AT+CIPSERVER=1,8080");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
  printf("AT+CIPSTO=7200");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
}
```
- 客户端初始化代码如下。
```C
void Wifi_tcp_ClientInit() //客户端初始化
{
  printf("AT+CIPMUX=1");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);  
  printf("AT+CIPSTART=0,"TCP","192.168.4.1",8080");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);  
}
```
- 发送数据代码如下。
```C
void Wifi_Send_Data(uint8 Id,uint8 Len,uint8 *str) //写指定长度的数据
{
  printf("AT+CIPSEND=%d,%d",Id,Len);
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(1);
  uart_putstr(UART4,str);   //数据长度满才可发送
}
```


2.UDP透传模式

- 客户端udp初始化
```C
void Wifi_Udp_ClientInit(void)//客户端udp初始化
{
  printf("AT+CIPMUX=0");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
  printf("AT+CIPSTART="UDP","255.255.255.255",8080,8080,0");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
  printf("AT+CIPMODE=1");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
}
```
- 进入透传模式
```C
void Wifi_Udp_SendData(void)//发送数据指令，进入透传
{
  printf("AT+CIPSEND");
  uart_putchar(UART4,0x0d);
  uart_putchar(UART4,0x0a);
  DELAY_MS(10);
}
```
- 退出透传模式
```C
void Wifi_Udp_Send_End(void)//退出透传
{
  printf("+++");
}
```