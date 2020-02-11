---
title: cameraOnRaspberry
abbrlink: 836650148
date: 2020-02-10 20:20:44
tags: RaspberryPi
---

```bash
raspistill -o image.jpg  

常用命令：  
# 两秒钟（时间单位为毫秒）延迟后拍摄一张照片，并保存为 image.jpg  
raspistill -t 2000 -o image.jpg  

# 拍摄一张自定义大小的照片。  
raspistill -t 2000 -o image.jpg -w 640 -h 480  

# 降低图像质量，减小文件尺寸  
raspistill -t 2000 -o image.jpg -q 5  

# 强制使预览窗口出现在坐标为 100,100 的位置，并且尺寸为宽 300 和高 200 像素。  
raspistill -t 2000 -o image.jpg -p 100,100,300,200  

# 禁用预览窗口  
raspistill -t 2000 -o image.jpg -n  

# 将图像保存为 PNG 文件（无损压缩格式，但是要比 JPEG 速度慢）。注意，当选择图像编码时，文件扩展名将被忽略。  
raspistill -t 2000 -o image.png –e png  

# 向 JPEG 文件中添加一些 EXIF 信息。该命令将会把作者名称标签设置为 Dreamcolor，GPS 海拔高度为 123.5米。  
raspistill -t 2000 -o image.jpg -x IFD0.Artist=Dreamcolor -x GPS.GPSAltitude=1235/10  

# 设置浮雕风格图像特效  
raspistill -t 2000 -o image.jpg -ifx emboss  

# 设置 YUV 图像的 U 和 V 通道为指定的值（128:128 为黑白图像）  
raspistill -t 2000 -o image.jpg -cfx 128:128  

# 仅显示两秒钟预览图像，而不对图像进行保存。  
raspistill -t 2000  

# 间隔获取图片，在 10 分钟（10 分钟 = 600000 毫秒）的时间里，每 10 秒获取一张，并且命名为 image_number_1_today.jpg，image_number_2_today.jpg... 的形式。  
raspistill -t 600000 -tl 10000 -o image_num_%d_today.jpg  

# 获取一张照片并发送至标准输出设备  
raspistill -t 2000 -o -  

# 获取一张照片并保存为一个文件  
raspistill -t 2000 -o - > my_file.jpg
```