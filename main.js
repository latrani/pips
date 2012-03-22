(function( $ ){

    $.fn.pips = function(options) {  

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            pips: 5
        }, options);

        var pipsElement = $("<div class='pips'></div>");
        for (var i = 0; i < settings.pips; i++) {
            pipsElement.append("<div class='pip'>");
        }

        return this.each(function() {
            var origElement = this;
            var initialPips = parseInt($(this).html(), 10);
            var myPips = pipsElement.clone();
            $(this).hide().after(myPips);
            $(".pip", myPips).hover(function(){
                $(this).add($(this).prevAll()).toggleClass("hover");
            })
            .click(function(){
                var count = $(this).add($(this).prevAll()).addClass("selected").length;
                $(this).nextAll().removeClass("selected");
                $(origElement).html(count).click().find("input").blur();
                return false;
            })
            .slice(0, initialPips).addClass("selected");
        });

    };
})( jQuery );

$(function(){
    $(".editable").editable("test", 
        {
            style: 'display: inline',
            onblur: 'submit'
        }
    );

    $(".editable").pips();
});
