---
title: 树莓派上搭建python脸部识别环境
abbrlink: 2384358518
date: 2020-02-10 20:21:28
tags: RaspberryPi
---

## 更新
```bash
sudo apt update
sudo apt upgrade
```
## 设置树莓派
```
sudo raspi-config
```

- 开启摄像头
- gpu memory 设置为16
## 安装依赖
```
sudo apt-get install build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-dev \
    libavcodec-dev \
    libavformat-dev \
    libboost-all-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    python3-pip \
    zip
sudo apt-get clean
```
## 安装python的摄像头操作模块
```
sudo apt-get install python3-picamera
sudo pip3 install --upgrade picamera[array]
暂时增大交换内存

sudo nano /etc/dphys-swapfile

< change CONF_SWAPSIZE=100 to CONF_SWAPSIZE=1024 and save / exit nano >

sudo /etc/init.d/dphys-swapfile restart
```
## 下载安装dlib
```
mkdir -p dlib
git clone -b 'v19.6' --single-branch https://github.com/davisking/dlib.git dlib/
cd ./dlib
sudo python3 setup.py install --compiler-flags "-mfpu=neon"
```
## 安装face_recognition
```
sudo pip3 install face_recognition
恢复交换内存

sudo nano /etc/dphys-swapfile

< change CONF_SWAPSIZE=1024 to CONF_SWAPSIZE=100 and save / exit nano >

sudo /etc/init.d/dphys-swapfile restart
```