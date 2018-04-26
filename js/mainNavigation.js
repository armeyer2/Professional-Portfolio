(function ($) {
    $(document).ready(function () {

        $('#aboutLink').mouseover(function () {
            if ($(window).width() < 600) {
               $("#mobileAbout").fadeIn(500);
               $('#navbar').fadeOut(500);
           } else {
               $("#contact").fadeOut(500);
               $("#about").fadeIn(500);
           }
        })
        $('#aboutLink').click(function () {
            if ($(window).width() < 600) {
               $("#mobileAbout").fadeIn(500);
               $('#navbar').fadeOut(500);
           } else {
               $("#contact").fadeOut(500);
               $("#about").fadeIn(500);
           }
        })

        $('#galleryLink').mouseover(function () {
            if ($(window).width() < 600) {
               $("#gallery").fadeIn(500);
               $('#navbar').fadeOut(500);
           } else {
               $("#contact").fadeOut(500);
               $("#gallery").fadeIn(500);
           }
        })
        $('#galleryLink').click(function () {
            if ($(window).width() < 600) {
               $("#gallery").fadeIn(500);
               $('#navbar').fadeOut(500);
           } else {
               $("#contact").fadeOut(500);
               $("#gallery").fadeIn(500);
           }
        })


        $('#contactLink').mouseover(function () {
            if ($(window).width() < 600) {
               $("#mobileContact").fadeIn(500);
               $('#navbar').fadeOut(500);
           } else {
               $("#about").fadeOut(500);
               $("#contact").fadeIn(500);
           }

        })
        $('#contactLink').click(function () {
            if ($(window).width() < 600) {
               $("#mobileContact").fadeIn(500);
               $('#navbar').fadeOut(500);
            } else {
               $("#about").fadeOut(500);
               $("#contact").fadeIn(500);
            }
        })

        $(".backButton").click(function () {
            $("#mobileAbout").fadeOut(500);
            $("#mobileContact").fadeOut(500);
            $("#navbar").fadeIn(500);
        })
    });

})(jQuery);
