(function($) {

    $(document).ready(function () {

        $(".portfolioFadeText").fadeIn(1500);
        $("#gifLoader").fadeOut(1500);

    });

    $('#portfolioTextContainer').mouseover(function () {
        $("#pageLoadOverlay").fadeOut(250);

        var url = "mainNavigation.html";
        $(location).attr('href',url);

    })




})(jQuery);
