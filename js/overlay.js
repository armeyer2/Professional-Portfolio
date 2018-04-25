(function($) {

    $(document).ready(function () {

        $(".portfolioFadeText").fadeIn(1500);
        $("#gifLoader").fadeOut(1500);

    });

    $('#portfolioTextContainer').mouseover(function () {
        $("#pageLoadOverlay").fadeOut(50);
        setTimeout( function functionName() {
            var url = "mainNavigation.html";
            $(location).attr('href',url);
        }, 100)
    })


})(jQuery);
