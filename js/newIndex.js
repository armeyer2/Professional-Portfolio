(function($) {

  "use strict"; // Start of use strict

  $(document).ready(function () {


        $("#jumbotronImage").width($(window).width());

          $(".portfolioFadeText").fadeIn(1500);
          $("#gifLoader").fadeOut(1500);

          //var ctx = document.getElementById("myChart");
          /**var myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: ["September","October","November", "December", "January", "February"],
                  datasets: [{
                      label: 'Crewneck Price',
                      data: [30, 28, 30, 28, 26, 24],
                      backgroundColor: [
                          'rgba(81, 119, 158, 0.2)'

                      ],
                      borderColor: [
                          'rgb(81, 119, 158, 1)'

                      ],
                      borderWidth: 1 ,
                      pointStyle: "circle"
                  },
                  {
                      label: 'Short-Sleeve Price',
                      data: [28, 24, 26, 24, 22, 18],
                      backgroundColor: [
                          'rgba(92, 152, 249, 0.2)'

                      ],
                      borderColor: [
                          'rgb(81, 119, 158, 1)'

                      ],
                      borderWidth: 1 ,
                      pointStyle: "circle"
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true ,
                              min: 15 ,
                              max: 35 ,
                              stepSize: 5
                          }
                      }]
                  }
              }
          });**/




  })

//scrolls to the center of the image
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 20)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $("#priceOverlayButton").click(function() {
      $("#priceOverlay").fadeIn(750);
      console.log("prive overlway clicked");
  })
  $("#priceOverlayButtonMobile").click(function() {
      $("#priceOverlay").fadeIn(750);
      console.log("prive overlway clicked");
  })

  $('#scrollButton').click( function() {
      $('merch').center();

  })
  $('#scrollButtonProduct').click( function() {
      $('#priceSection').center();

  })
  $('#portfolioTextContainer').mouseover(function () {
      $("#name").fadeOut(250);
      $(".portfolioFadeText").fadeOut(250);
      setTimeout(function () {
           $("#indexCapture").fadeIn(500);
           $("#galleryCapture").fadeIn(500);
      }, 1000)

  })

  $('#indexCapture').mouseover(function () {
      $(this).css("border" , "#a3a09c 3px solid");
  })
  $('#indexCapture').mouseout(function () {
      $(this).css("border" , "#e0dedb 2px solid");
  })
  $('#galleryCapture').mouseover(function () {
      $(this).css("border" , "#a3a09c 3px solid");
  })
  $('#galleryCapture').mouseout(function () {
      $(this).css("border" , "#e0dedb 2px solid");
  })


  $("#signInSubmit").click(function () {

      let firstName = $("#firstName").val();
      if (firstName.length > 0) {
          $("#overlay").fadeOut(750);
          $("#signUp").html("Hello " + $("#firstName").val());
      } else {
          $("#warningMessages").html("*You must atleast enter a first name*");
      }



  });


  $("#signUp").click(function () {
      $("#overlay").fadeIn(750);
      $("#chart-container").fadeIn(750);
  });


  $("#signInCancel").click(function () {
      $("#overlay").fadeOut(750);

  });
  $("#pageLoadOverlay").click(function () {

      $('body').css({

            overflow: 'auto',
            overflowX: 'scroll'
        });
      $("#pageLoadOverlay").fadeOut(750);
      if($(window).width() >= 768) {
          setTimeout(function(){
              $("#scrollButton").fadeIn(1500);

          }, 1500);

      }
      if($(window).width() <= 768) {
          $("#mobileScrollButton").fadeIn(2500);

      }

  });

  $("#purchaseCancel").click(function () {
      $("#priceOverlay").fadeOut(750);

  });
  $("#scrollButton").click(function () {
      //setTimeout(function () {
    //      $("#scrollButtonProduct").fadeIn(3000);
     // }, 2000);



  });

  $('#chart-container').click(function () {
      setTimeout(showPrice, 2000);  //se
      console.log("t shirt button clicked");

  });

  function showPrice() {
      setTimeout(document.getElementById("my_div").className="show", 2000);  //se
      console.log("showPrice opened");
  }




  $('.price').click(function() {
    document.getElementById("actualPrice").innerHTML = "<h2>$32.99</h2>";
    $("seePrice").fadeOut();
  });

  $('#reminder').click(function() {
    document.getElementById("formArea").innerHTML = "<div class='form-group'><label for='usr'></label><input type='text' placeholder='example@domain.com' class='form-control' id='usr'><div class='col-xs-6' id='sendButton'><button type='button' id='mailButton' class='btn reminder' >Send</button></div></div>";
  });

  $('#purchase').click(function() {
    document.getElementById("formPurchaseArea").innerHTML = `<div class="form-group">
              <label for="amount">Crewneck:</label>
              <select class="form-control col-xs-6" id="amount">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>

            </div>
            <div class="form-group">
              <label for="amount">t-Shirt:</label>
              <select class="form-control" id="amount">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
              </select>
            </div>
            <button type="button"  class="btn" >Checkout</button>`;
  });

  $('#mailButton').click(function() {
    document.getElementById("mailButton").innerHTML = "<p>Sent!</p>";
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $("price").fadeIn();


  });



})(jQuery); // End of use strict
