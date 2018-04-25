(function ($) {
    $(document).ready(function () {
        $('#aboutLink').mouseover(function () {
            $("#contact").fadeOut(500);
            $("#about").fadeIn(500);
        })
        $('#aboutLink').click(function () {
            $("#contact").fadeOut(500);
            $("#about").fadeIn(500);
        })


        $('#contactLink').mouseover(function () {
            $("#about").fadeOut(500);
            $("#contact").fadeIn(500);
        })
        $('#contactLink').click(function () {
            $("#about").fadeOut(500);
            $("#contact").fadeIn(500);
        })
    });

})(jQuery);
