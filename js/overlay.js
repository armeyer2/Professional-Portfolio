(function($) {

    $(document).ready(function () {

        $(".portfolioFadeText").fadeIn(1500);
        $("#gifLoader").fadeOut(1500);

    });

    $('#portfolioTextContainer').mouseover(function () {
        $("#pageLoadOverlay").fadeOut(250);

        setTimeout(function () {
             $("#navbar").fadeIn(250);
        }, 1000)
    })




})(jQuery);
