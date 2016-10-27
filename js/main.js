$(function() {
  $('section.scrollsections').scrollSections({
    touch: false,
    active: 'active',
    prefix: 'trafmag',
    createNavigation: false
  });

  $('[data-next-section]').on('click', function() {
    $('#trafmag-navigation a[href="' + this.hash + '"]').click();
    return false;
  });

  $('.carousel').owlCarousel({
    loop: false,
    margin: 10,
    dots: true,
    nav: true,
    responsive: {
      0: { items: 1 }
    }
  });
  
  $("#home").each(function() {
    setTimeout(function() {
      $("#home .wrap").animate({
        opacity: 1.0,
        bottom: '0'
      }, 700);
    }, 500);
  });

  $(window).scroll(function() {
    $('#about:in-viewport').each(function() {
      setTimeout(function() {
        $('#about .wrap').animate({
          opacity: 1.0
        }, 1000);

        $('#about h1, #about p').animate({
          top: 0
        }, 1000);

        $('#about ul').animate({
          left: 0,
          opacity: 1.0
        }, 1000);

        $('#about .stats').animate({
          right: 0,
          opacity: 1.0
        }, 1000);
      }, 500);
    });

    $("#advertising_formats:in-viewport").each(function() {
      setTimeout(function() {
        $('#advertising_formats .vertical-align').animate({
          opacity: 1.0
        }, 1000);

        $('#advertising_formats h1, #advertising_formats p').animate({
          top: 0
        }, 1000);

        $('#advertising_formats .carousel').animate({
          bottom: 0
        }, 1000);
      }, 500);
    });

    $("#customers:in-viewport").each(function() {
      setTimeout(function() {
        $('#customers .vertical-align').animate({
          opacity: 1.0
        }, 1000);

        $('#customers h1, #customers p').animate({
          top: 0
        }, 1000);

        $('#customers .carousel').animate({
          bottom: 0
        }, 1000);
      }, 500);
    });

    $("#contacts:in-viewport").each(function() {
      setTimeout(function() {
        $('#contacts > .wrap').animate({
          opacity: 1.0
        }, 1000);

        $('#contacts h1, #contacts p').animate({
          top: 0
        }, 1000);

        $('#contacts .info').animate({
          left: 0
        }, 1000);

        $('#contacts form').animate({
          right: 0
        }, 1000);
      }, 500);
    });
  });

  // Circle statistics animation
  var nFormatter = function(num) {
    var txK = /\B(?=(\d{3})+(?!\d))/,
        rxM = /\.0+$|(\.[0-9]*[1-9])0+$/;

    return (num >= 1E6) ? (num / 1E6).toFixed(0).replace(rxM, '$1') + 'M' : num.toString().replace(txK, ',');
  }

  var statsanim = function() {
    $('#about').each(function() {
      setTimeout(function() {
        $('[data-circle]').fadeTo(100, 1).circleProgress({
          value: 1.0,
          startAngle: -33,
          animationStartValue: 0.0,
          size: 125,
          lineCap: 'round',
          emptyFill: 'rgba(255, 255, 255, 1.0)',
          fill: { color: '#e94050' }
        }).on('circle-animation-progress', function(event, progress){
          var $text = $(this).find('.text'),
              num = nFormatter(parseInt($text.attr("data-text") * progress));
          $text.html(num);
        });
      }, 500);
    });

    $(window).unbind('scroll', statsanim);
  };

  $('#about').each(function() {
    $(window).bind('scroll', statsanim);
  });
});
