<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale-1,user-scalable=no"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.8.0/jquery.fullPage.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.8.0/jquery.fullPage.js"></script>
<link rel="stylesheet" href="file:///F|/新建文件夹/队长最屌/resume.css" type="text/css"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/3.1.10/echarts.js"></script>
<script src="file:///F|/新建文件夹/队长最屌/resume.js"></script>

<title>无标题文档</title>

</head>

<body>
<div id="fullpage">
	<div class="section section1">
    <img id="face" src="file:///F|/新建文件夹/队长最屌/85246ae8d78a75584745057eece477d78fc7c134c03ef-bCYFMI_fw658.jpg"title="汪！" />
    <h1 id="brief">游科迪的个人简历</h1>
    </div>
    <div class="section section2">
    <img id="face2" src="file:///F|/新建文件夹/队长最屌/1437901197017.jpg" />
    <div id="page2introduce">
    	<h1>游科迪</h1>
        <p>2017届毕业生 自动化专业<br/><br/>笔耕不辍 光影不灭 设计不死</p>
    </div>
    <div id="page2information">
    	<h1>基本信息:</h1>
        <ul>
        <li><img src="file:///F|/新建文件夹/队长最屌/icon-3.jpg" class="icon" />毕业院校：河海大学</li>
        <li><img src="file:///F|/新建文件夹/队长最屌/未标题-1.jpg" class="icon"/>TEL:18661116907</li>
        <li><img src="file:///F|/新建文件夹/队长最屌/icon-2.jpg" class="icon"/>EMAIL:youkedi@foxmail.com</li>
        <li><img src="file:///F|/新建文件夹/队长最屌/icon-4.jpg" class="icon" />求职意向：前端实习生</li>
        </ul>
    </div>
    </div>
    <div class="section section3" id="pic" style="width:1920px; height:950px;"></div>
    <div class="section section4">
    	<h1>作品展示</h1>
    	<div class="slide">slide1</div>
        <div class="slide">slide2</div>
    </div>
    <div class="section section5"><h1>第五页</h1></div>
    <div class="section section6"><h1>第六页</h1></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/move.js/0.5.0/move.min.js"></script>
<script>
	$(function(){
		$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4'],
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:['封面','基本信息','我的技能','作品展示','杂项','结尾'],
		verticalCentered:false,
		afterLoad:function(link,index){
			switch(index){
				case 1:
				move('.section1 h1').scale(2).end();
				break;
				case 2:
				move('.section2 img').set('margin-left','35%').end();
				move('#page2information').set('margin-left','35%').end();
				break;
				case 3:
				break;
				case 4:
				break;
				case 5:
				break;
				default:
				break;}
			},
		});
    
    });
	 setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
	var myChart=echarts.init(document.getElementById("pic"));
	myChart.setOption(options);
	
</script>
</body>
</html>
