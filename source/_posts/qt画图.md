---
title: qt画图
tags:
  - Qt
  - 上位机 Qt
abbrlink: 3910010431
date: 2018-04-21 14:15:31
---

## [](#QcustomPlot "QcustomPlot")QcustomPlot

1.  下载
 <figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
</pre></td><td class="code"><pre><span class="line">http://www.qcustomplot.com</span>
</pre></td></tr></table></figure>
2.  把qcustomplot.cpp和qcustomplot.h拷贝到工程目录下，然后把这两个文件引入工程项目即可

3.  pro文件中QT += widgets printsupport
4.  使用一个Widget窗体在ui设计器上，对这个窗体点击右键，选择提升为，把提升的类名填写为QCustomPlot即可，这样就可以使用了，使用就和我们用普通控件一样，ui-&gt;xxx-&gt;……。xxx为widget的名字
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
</pre></td><td class="code"><pre><span class="line">QVector x(101), y(101); // initialize with entries 0..100</span>
<span class="line">for (int i=0; i&lt;101; ++i)</span>
<span class="line">&#123;</span>
<span class="line">x[i] = i/50.0 – 1; // x goes from -1 to 1</span>
<span class="line">y[i] = x[i]*x[i]; // let’s plot a quadratic function</span>
<span class="line">&#125;</span>
<span class="line">qDebug()&lt;&lt;“data has been created”;</span>
<span class="line">ui-&gt;black_line-&gt;addGraph();</span>
<span class="line">qDebug()&lt;&lt;“begin painting”;</span>
<span class="line">ui-&gt;black_line-&gt;graph(0)-&gt;setData(x,y);</span>
<span class="line">ui-&gt;black_line-&gt;xAxis-&gt;setLabel(“x”);</span>
<span class="line">ui-&gt;black_line-&gt;yAxis-&gt;setLabel(“y”);</span>
<span class="line">ui-&gt;black_line-&gt;xAxis-&gt;setRange(-1, 1);</span>
<span class="line">ui-&gt;black_line-&gt;yAxis-&gt;setRange(0, 1);</span>
<span class="line">ui-&gt;black_line-&gt;replot();</span>
<span class="line">qDebug()&lt;&lt;“finish”;</span>
</pre></td></tr></table></figure>