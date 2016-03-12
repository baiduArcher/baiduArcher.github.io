$(document).ready(function() {
	
	var li = $(".header-nav ul li");
	var bot = $('#nav-bottom')
	li.on('mouseenter', function(){
		var index = $(this).index();
		console.log(index);
		var pos = index*54+index*45
		bot.css("left",pos+"px");
	})
	
	 $(".mycarousel").mycarousel({
	               
	                //循环展示
	                loop : true, 
	                //显示小圆点
	                dots : true,
	                //显示箭头
	                arrow : true,
	                //首图随机
	                random : true, 
	                //轮播间隔
	                time_space : 3000, 
	                //动画结束时的回调函数
	                callback: function(){ //
	                   
	                }
	            });
})