/* Navigation scroll */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '80%;'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '65%;'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');
}, {
    offset: '65%;'
});