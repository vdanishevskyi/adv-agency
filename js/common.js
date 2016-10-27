$(function() {
  $.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});

  // Show modal
  $('[data-modal]').on('click', function() {
    var modal = this.dataset.modal;
    $(modal).fadeIn(200);
    setTimeout(function() { $(modal).addClass('active'); }, 500)
    return false;
  });

  // Close modal
  $('[data-modal-close], .modal').on('click', function() {
    var $modal = $(this).closest('.modal').removeClass('active');
    setTimeout(function() { $modal.fadeOut(200); }, 400)
    return false;
  });

  // Tabs
  $('[data-tab]').on('click', function() {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    var tabPane = $(this).attr('href');
    $(tabPane).addClass('active').siblings('[data-tab-pane]').removeClass('active');
    return false;
  });

  // Scroll up to page
  var $scrollUp = $('[data-scroll-up]');

  $(window).scroll(function(){
    $scrollUp[($(this).scrollTop() > 100 ? 'fadeIn' : 'fadeOut')](200)

    if ($scrollUp.data('fixedScrollUp') == '') {
      var bottomHeight = 0 - ($(document).height() - window.outerHeight - $(window).scrollTop());
      $scrollUp.css('margin-bottom', bottomHeight > 0 ? bottomHeight : 0);
    }
  });

  $scrollUp.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  // Menu dropdown
  $('[data-dropdown]').on('click', function() {
    $('[data-dropdown-list]').slideToggle();
    return false;
  })

  $('[data-lang-dropdown-list]').on('click', function(e) {
    e.stopPropagation();
  })

  // Lang dropdown list
  $('[data-btn-lang-dropdown]').on('click', function(e) {
    e.stopPropagation();
    $('[data-lang-dropdown-list]').fadeToggle();
    return false;
  });

  $(window).on('click', function() {
    $('[data-dropdown-list]')[($(document).width() < 980 ? 'slideUp' : 'show')]();
    $('[data-lang-dropdown-list]').fadeOut(200);
  });
});
