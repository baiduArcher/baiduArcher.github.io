(function($) {
    $(document).ready(function() {
        $(".m-chart .index").each(function(){
            var me = $(this);
            me.width(parseFloat(me.data("index")) * me.width());
        })
        nav_fix()
        $(window).scroll(function(){
            nav_fix();
        })
        $("#main-nav .dropdown").on("click", function(e) {
            var link, list;
            e.preventDefault();
            link = $(this);
            list = link.parent().find("> ul");
            if (list.is(":visible")) {
                link.removeClass("on");
                list.slideUp(300, function() {
                    return $(this).removeClass("on");
                });
            } else {
                link.addClass("on");
                list.addClass("on").slideDown(300, function() {
                });
            }
            return false;
        });
        $(".m-tb-menu li").on("click", function(e) {
            var me = $(this);
            var cont = me.parent(".m-tb-menu").siblings(".m-tb-cont");
            me.siblings(".on").removeClass("on");
            me.addClass("on");
            cont.find("li.on").removeClass("on");
            cont.find("li").eq(me.index()).addClass("on");
          
        });
        function nav_fix(){
            var mn = $("#main-nav"),
            sl = $(document).scrollLeft(),
            st = $(document).scrollTop();
            if(st > 55){
                mn.addClass("fixed");
                mn.css("left",-sl);
            }else{
                mn.removeClass("fixed");
            }
        }
    });
})(jQuery)