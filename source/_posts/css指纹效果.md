---
title: css指纹效果
tags: HTML
abbrlink: 765759357
date: 2020-02-10 14:47:59
---
```HTML
<!DOCTYPE HTML>
<html>
<head>
<meta charset=utf-8>
<title>css指纹效果</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<style>
.start
{
animation-play-state:paused;position: absolute; top: 0 ;left: 0; width:100px; height: 10px; background:url(http://denghao.me/demo/2015/fingerScan/line.png) center no-repeat; background-size: 100%; -webkit-animation:act-scan 2s linear infinite alternate;
}
.finish
{
position: absolute; top: 0 ;left: 0; width:100px; height: 10px; background:url(http://denghao.me/demo/2015/fingerScan/line.png) center no-repeat; background-size: 100%;animation-play-state: paused;
}
.beijing
{
background: #009;color: #9FF;
}
.print
{
width: 100px; height:132px; background:
url(http://denghao.me/demo/2015/fingerScan/finger.png) center no-repeat; background-size: 100%; position: relative;
}
.print .scan
{
position: absolute; top: 0 ;left: 0; width:100px; height: 10px; background:url(http://denghao.me/demo/2015/fingerScan/line.png) center no-repeat; background-size: 100%;-webkit-animation:act-scan 2s linear infinite alternate;animation-play-state: paused;
}
@-webkit-keyframes act-scan{
0%{ top:0; }
50%{ top:120px; }
100%{ top:0;}
}
@keyframes act-scan{
0%{ top:0; }
50%{ top:120px; }
100%{ top:0;}
}
</style>

</head>
<body >
<table>
<td class="beijing">
<div class="print" >
<div class="scan" align = "center" id = "scannow" ></div>
</div>
</td></table>

<script src="http://denghao.me/js/jquery.min.js"></script>
<script>
$(function(){
var it = document.getElementById('scannow');
$(".print").on("touchstart", function(event) {
event.preventDefault();
call();
it.className="start";
});

$(".print").on("touchend",function(event){
event.preventDefault();
clearInterval(timer1);
});

function call() {
timer1 = window.setTimeout(function() {
alert("你好啊");
}, 1000);
document.getElementById('scannow').className="finish";

}

})
</script>
</body>
</html>
```