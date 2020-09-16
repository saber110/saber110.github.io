---
title: socksV5转化为http代理
tags:
  - 代理
abbrlink: 1450526405
date: 2018-07-06 19:52:07
---

1.  使用工具  privoxy

安装
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">apt-get install privoxy</span>
</pre></td></tr></table></figure>

更改配置
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">vim /etc/privoxy/config</span>
</pre></td></tr></table></figure>

并在里面添加
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">forward-socks5   /               127.0.0.1:1080 .</span>
</pre></td></tr></table></figure>

重启服务
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">service privoxy restart</span>
</pre></td></tr></table></figure>

给系统设置http代理
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">vim ~/.bashrc</span>
</pre></td></tr></table></figure>

添加
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">export http_proxy=http://127.0.0.1:8118/</span>
</pre></td></tr></table></figure>

使更改生效
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">source ~/.bashrc</span>
</pre></td></tr></table></figure>