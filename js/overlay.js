(function($) {

    $(document).ready(function () {

        $(".portfolioFadeText").fadeIn(1500);
        $("#gifLoader").fadeOut(1500);

    });


    $('#indexCapture').mouseover(function () {
        $(this).css("border" , "#a3a09c 2px solid");
    })
    $('#indexCapture').mouseout(function () {
        $(this).css("border" , "#e0dedb 2px solid");
    })
    $('#infoCapture').mouseover(function () {
        $(this).css("border" , "#a3a09c 2px solid");
    })
    $('#infoCapture').mouseout(function () {
        $(this).css("border" , "#e0dedb 2px solid");
    })

    $('#galleryCapture').mouseover(function () {
        $(this).css("border" , "#a3a09c 2px solid");
    })
    $('#galleryCapture').mouseout(function () {
        $(this).css("border" , "#e0dedb 2px solid");
    })

    $('#portfolioTextContainer').mouseover(function () {
        $("#pageLoadOverlay").fadeOut(250);

        setTimeout(function () {
             $("#navbar").fadeIn(250);
        }, 1000)
    })

    


})(jQuery);
