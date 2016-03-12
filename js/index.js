$(document).ready(function() {
	
	var li = $(".header-nav ul li");
	var bot = $('#nav-bottom')
	li.on('mouseenter', function(){
		var index = $(this).index();
		console.log(index);
		var pos = index*66+3
		bot.css("left",pos+"px");
	})
	
	
})