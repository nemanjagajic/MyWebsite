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
    offset: '55%;'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');
}, {
    offset: '70%;'
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeInUp');
}, {
    offset: '90%;'
});

$('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeIn');
}, {
    offset: '90%;'
});

/* Maps */
$(document).ready(function() {

    var map = new GMaps({
        div: '.map',
        lat: 45.2623546,
        lng: 19.9367733,
        zoom: 12
    });

    map.addMarker({
      lat: 45.2518758,
      lng: 19.8345493,
      title: 'Novi Sad',
      infoWindow: {
      content: '<p>This is our Novi Sad</p>'
      }
    });
    
});