---
title: ubuntu装机
tags:
  - linux
abbrlink: 2436325960
date: 2019-04-18 11:21:34
---

1.  Ubuntu安装之新建autoinstall.sh <figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">vim autoinstall.sh</span>
</pre></td></tr></table></figure>

2.
    <figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line">5</span>
<span class="line">6</span>
<span class="line">7</span>
<span class="line">8</span>
<span class="line">9</span>
<span class="line">10</span>
<span class="line">11</span>
<span class="line">12</span>
<span class="line">13</span>
<span class="line">14</span>
<span class="line">15</span>
<span class="line">16</span>
<span class="line">17</span>
<span class="line">18</span>
<span class="line">19</span>
<span class="line">20</span>
<span class="line">21</span>
<span class="line">22</span>
<span class="line">23</span>
<span class="line">24</span>
<span class="line">25</span>
<span class="line">26</span>
<span class="line">27</span>
<span class="line">28</span>
<span class="line">29</span>
<span class="line">30</span>
<span class="line">31</span>
<span class="line">32</span>
<span class="line">33</span>
<span class="line">34</span>
<span class="line">35</span>
<span class="line">36</span>
</pre></td><td class="code"><pre><span class="line">将下列内容写入</span>
<span class="line">apt install vim</span>
<span class="line">## theme</span>
<span class="line">add-apt-repository ppa:noobslab/themes</span>
<span class="line">apt update</span>
<span class="line">apt install flatabulous-theme</span>
<span class="line">## icons</span>
<span class="line">add-apt-repository ppa:noobslab/icons</span>
<span class="line">apt update</span>
<span class="line">apt install ultra-flat-icons</span>
<span class="line">## pointer</span>
<span class="line">add-apt-repository ppa:noobslab/macbuntu</span>
<span class="line">apt update</span>
<span class="line">apt install macbuntu-os-icons-lts-v7</span>
<span class="line">apt install macbuntu-os-ithemes-lts-v7</span>
<span class="line">## fonts</span>
<span class="line">apt install fonts-wqy-microhei</span>
<span class="line">##</span>
<span class="line">apt install unity-tweak-tool</span>
<span class="line">## docky</span>
<span class="line">apt install cairo-dock</span>
<span class="line"></span>
<span class="line">##</span>
<span class="line">apt install git</span>
<span class="line">## python</span>
<span class="line">apt install python-pip</span>
<span class="line">pip install https://github.com/shadowsocks/shadowsocks/archive/master.zip -U</span>
<span class="line"></span>
<span class="line">## hexo</span>
<span class="line">apt install npm</span>
<span class="line">npm install -g hexo-cli</span>
<span class="line"></span>
<span class="line">## network</span>
<span class="line">apt install --reinstall linux-firmware</span>
<span class="line">modprobe -r iwlwifi</span>
<span class="line">modprobe iwlwifi</span>
</pre></td></tr></table></figure>

1.  自动安装
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">sudo ./autoinstall.sh</span>
</pre></td></tr></table></figure>