---
title: 从C到C++
tags:
  - 算法
  - C++
abbrlink: 1453157241
date: 2019-04-24 14:16:05
---

## [](#引用 "引用")引用

1.  定义引用时一定要将其**初始化**为引用某个变量

2.  初始化后，他就一直引用这个变量，不会再引用到别的变量（后面相当于给引用的变量赋值）

3.  只能引用变量，不能引用常量和表达式

4.  引用的用法

    - 用作形参类型，改变实参的值
    - 用作函数返回值类型，可以将函数放在等式左边（相当于给return的那个变量进行赋值）
<figure class="highlight c++"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line">5</span>
<span class="line">6</span>
<span class="line">7</span>
<span class="line">8</span>
</pre></td><td class="code"><pre><span class="line"><span class="keyword">int</span> n = <span class="number">4</span>;</span>
<span class="line"><span class="function"><span class="keyword">int</span> &amp; <span class="title">SetValue</span><span class="params">()</span></span>&#123;<span class="keyword">return</span> n;&#125;</span>
<span class="line"><span class="function"><span class="keyword">int</span> <span class="title">main</span><span class="params">()</span></span>&#123;</span>
<span class="line">SetValue() = <span class="number">40</span>;</span>
<span class="line"><span class="built_in">cout</span> &lt;&lt; n;</span>
<span class="line"><span class="keyword">return</span> <span class="number">0</span>;</span>
<span class="line">&#125;</span>
<span class="line"><span class="comment">// print 40</span></span>
</pre></td></tr></table></figure>
    *   常引用：不能_通过_常引用去修改其引用的内容
<figure class="highlight c++"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
</pre></td><td class="code"><pre><span class="line"><span class="keyword">int</span> n = <span class="number">100</span>;</span>
<span class="line"><span class="keyword">const</span> <span class="keyword">int</span> &amp; r = n;</span>
<span class="line">r = <span class="number">200</span>; <span class="comment">//编译错误</span></span>
<span class="line">n = <span class="number">200</span>； <span class="comment">// OK</span></span>
</pre></td></tr></table></figure>

## [](#const "const")const

1.  定义常量（区别与define就是有类型，可以进行类型检查，**建议多使用const**）
2.  定义常量指针(不能_通过_常量指针去修改其指向的内容）

        *   常量指针可以只想别的内容
    *   不能把常量指针赋值给非常量指针，反过来可以
    *   形参为常量指针时，可避免函数内部不小心改变指针所指地方的内容
3.  定义常引用

## [](#动态内存分配 "动态内存分配")动态内存分配

用法

1.  分配一个变量
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
</pre></td><td class="code"><pre><span class="line">P = new T;</span>
<span class="line">// T 是任意类型名，P是类型为T * 的指针，指向sizeof（T）存储空间的起始地址</span>
</pre></td></tr></table></figure>
2.  分配一个数组
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
</pre></td><td class="code"><pre><span class="line">p = new T[N];</span>
<span class="line">// 分配一个类型为T的N个分组，返回T *</span>
</pre></td></tr></table></figure>

## [](#构造函数 "构造函数")构造函数

1.  一个类可以有多个构造函数，对象生成时自动调用构造函数；对象一旦生成就不能在其上执行构造函数

2.  构造函数执行必要的初始化工作

3.  每个类至少有一个构造函数（若无显示声明，则编译器自动生成一个无参无内容的构造函数），当没有任何构造函数时，编译器才会生成无参构造函数

4.  无参构造函数不一定有

5.  构造函数没有返回值类型，但是可以重载
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
</pre></td><td class="code"><pre><span class="line">ElemType T = new ElemType(1);// 对象变量的初始化</span>
<span class="line">ElemType S = new ElemType[3] = &#123;1,2&#125;;// 对象变量数组的初始化</span>
<span class="line">// S的分配过程中S[0], s[1]调用有参的构造函数，s[2]调用无参的构造函数</span>
</pre></td></tr></table></figure>

1.  **所有**的构造函数都与类同名

2.  构造函数**不负责分配对象空间**, 在分配空间之后才调用构造函数

### [](#复制构造函数 "复制构造函数")复制构造函数

1.  只有一个参数，即对同类对象的**引用**，可以是常引用，eg, X::X(const X &amp;)；也可以是非常引用，eg, X::X( X &amp;)。2.  若没有定义复制构造函数，则编译器会生成一个默认的复制构造函数来完成复制功能
3.  复制构造函数有且仅有一个
4.  起作用的时机

        1.  当用一个对象去初始化同类的另一个对象
    2.  如果某函数有一个参数是类A的对象，那么该函数被调用时，类A的复制构造函数将被调用

                *   若复制构造函数重写为不复制或者不复制全部属性，则实参和形参内容可能不同
    3.  如果某函数的返回值是类A的对象，那么该函数返回时，类A的复制构造函数将被调用
5.  对象间的赋值不会调用复制构造函数
6.  复制构造函数在形参为对象的时候会被调用，因此浪费了一部分时间，所以可以考虑使用**const CMyClass &amp; 引用类型**作为参数，不用调用复制构造函数

### [](#类型转换构造函数 "类型转换构造函数")类型转换构造函数

1.  只有一个形参但不是复制构造函数的函数
2.  当有需要的时候，编译器会自动调用生成一个临时的对象

## [](#析构函数 "析构函数")析构函数

1.  与类同名，并在前面加**‘ ~ ‘**，没有参数和返回值，一个类只能有一个析构函数

2.  在对象消亡时自动被调用，可以用来做善后工作，若没有显示定义析构函数，则编译器生成一个什么都不做的析构函数

3.  对象数组的生命期结束时，对象数组的每个元素的析构函数都会被调用
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
</pre></td><td class="code"><pre><span class="line">class CMyClass&#123;</span>
<span class="line">public:</span>
<span class="line">~CMyClass()&#123; cout &lt;&lt; &quot;destructor&quot; &lt;&lt; endl; &#125; </span>
<span class="line">&#125;;</span>
<span class="line">CMyClass obj;</span>
<span class="line">CMyClass fun(CMyClass sobj)&#123;// 形参消亡时会导致析构函数被调用</span>
<span class="line">return sobj;// 函数返回时生成临时对象返回</span>
<span class="line">&#125;</span>
<span class="line">int main()&#123;</span>
<span class="line">obj = fun(obj);// 函数调用的返回值（临时对象）被用过之后，该临时对象的析构函数被调用</span>
<span class="line">return 0;</span>
<span class="line">&#125;//程序执行结束obj的析构函数被调用</span>
<span class="line"></span>
<span class="line">// OUTPUT：</span>
<span class="line">// destructor</span>
<span class="line">// destructor</span>
<span class="line">// destructor</span>
</pre></td></tr></table></figure>
4.  析构函数**不负责回收对象空间**, 在调用析构函数之后系统才会回收对象空间

## [](#this指针 "this指针")this指针

## [](#其他 "其他")其他

1.  重载是函数名相同，参数个数或者类型不同的函数。参数相同，名字相同的返回值不同的则是重复定义
2.  C++中定义函数的时候可以让最右边连续若干个参数有默认值
3.  类的对象所占用的内存空间的大小等于所有成员变量的大小之和4.  全局对象在main之前被初始化
5.  静态局部变量在执行到这一句的时候被构造，在整个程序结束之后被析构
6.  析构顺序一般遵循“先构造的后消亡”
7.  new出来的东西只有delete才会消亡，**不delete的话哪怕程序结束也不会消亡**