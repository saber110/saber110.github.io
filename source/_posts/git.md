---
title: git
tags: []
abbrlink: 1368285564
date: 2017-09-28 23:04:42
---

<figure class="highlight bash"><table><tr><td class="gutter"><pre><span class="line">1</span>
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
</pre></td><td class="code"><pre><span class="line">git push origin 本地分支名:远程分支名</span>
<span class="line">git pull &lt;远程主机&gt; &lt;远程分支&gt;:&lt;本地分支&gt;</span>
<span class="line"></span>
<span class="line">git branch 不带参数：列出本地已经存在的分支，并且在当前分支的前面加“*”号标记</span>
<span class="line">git checkout BRANCH_ID 切换分支</span>
<span class="line">git branch -r 列出远程分支</span>
<span class="line">git branch -a</span>
<span class="line">git branch name 新建分支</span>
<span class="line">git branch -d | -D branchname 删除branchname分支</span>
<span class="line">git branch -d -r branchname 删除远程branchname分支</span>
<span class="line"></span>
<span class="line">git <span class="built_in">log</span></span>
<span class="line">git <span class="built_in">log</span> --<span class="built_in">stat</span></span>
<span class="line">git diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE</span>
<span class="line">git diff --name-status OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE</span>
<span class="line"></span>
<span class="line">git checkout COMMIT_ID 版本回退</span>
<span class="line"></span>
<span class="line">git stash list 查看堆栈情况</span>
<span class="line">git stash 将当前工作压栈</span>
<span class="line">git stash pop stash<span class="variable">$&#123;id&#125;</span> 弹出工作栈</span>
<span class="line">git stash clear 清除栈</span>
</pre></td></tr></table></figure>