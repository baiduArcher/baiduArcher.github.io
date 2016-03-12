$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 800,
      autoPlay: 4000,
      stopOnHover:true,
      paginationSpeed : 800,
      singleItem:true,
      navigationText : false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  

  $(".prod-tab-ul--nav-li").click(function(){
  	$(".prod-tab-ul--nav-li").removeClass("pord-ul--nav-on");
  	$(this).addClass("pord-ul--nav-on");
  	var index = $(this).index();
  	$(".owl-demo1").hide("noraml");
$(".owl-demo1:eq("+index+")").show("normal");
  	});
  	
 
	$(".owl-demo1").owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1200,5], //5 items between 1000px and 901px
      itemsDesktopSmall : false, // betweem 900px and 601px
      itemsTablet: false, //2 items between 600 and 0
      autoPlay: 3000,
      stopOnHover: true,
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
  $(".owl-demo1:eq(1), .owl-demo1:eq(2), .owl-demo1:eq(3)").hide();
  $(".owl-demo1 .owl-controls").addClass("ctrl-positon");
  $(".owl-demo1 .owl-pagination").addClass("card-positon").removeClass("owl-pagination");
  $("#search").focus(function(){
  	$(".search-wrapper1 ").addClass("focused")
});
$("#search").blur(function(){
  $(".search-wrapper1 ").removeClass("focused")
});
  
 
});
