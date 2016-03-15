(function(){
    var defaults = {};

    var cvSelect = (function(){
        function cvSelect(element, options){
            this.opts =  $.extend({},defaults , options||{});
            this.cv = element;
            this.cvInput = this.cv.find(".cv-input");
            this.cvDropdown = this.cv.find(".cv-dropdown");
            this.fmInput = this.cvInput.find("input");
            this.init();
            
        }
        cvSelect.prototype = {
            init : function(){
                var me = this;
                me.cvInput.click(function(){
                    me.cv.addClass("open");
                    return false;
                });
                me.cvDropdown.find("li").click(function(){
                    me.fmInput.val($.trim($(this).text()));
                    me.cv.removeClass("open");
                    return false;
                })
                $(document).click(function(){
                    me.cv.removeClass("open");
                })
            }
        }
        return cvSelect;
    })();

    $.fn.cvSelect = function(options){
        return this.each(function(){
           var me = $(this);
           var instance = me.data("cvSelect");
           if(!instance){
                instance = new cvSelect(me,options);
                me.data("cvSelect", instance);
           }
        })
    }
})(jQuery)