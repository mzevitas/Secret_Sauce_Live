(function () {

  angular.module('SecretSauce', ['ngRoute', 'ngCookies', 'angularSimpleSlider'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': '3vYR3T8u46KqNTov1do3NKHDXFUShDbJeEayMyn7',
        'X-Parse-REST-API-Key': '9wgGdPer1Ht6fal1OP5oJeyeQFPD39DffF1AzOF4',
        'Content-Type': 'application/json'
      }
    });




$(document).ready(function() {

  var id = '#dialog';

  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  $('#mask').css({'width':maskWidth,'height':maskHeight});

  $('#mask').fadeIn(500);
  $('#mask').fadeTo("slow",0.9);

  var winH = $(window).height();
  var winW = $(window).width();

  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  $(id).fadeIn(1000);

  //if close button is clicked
  $('.window .close').click(function (e) {

    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
  });

  $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
  });


});


$('.anibottle').addClass('animated bounceInRight');


$(document).foundation({
  "magellan-expedition": {
    active_class: 'active', // specify the class used for active sections
    threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
    destination_threshold: 20, // pixels from the top of destination for it to be considered active
    throttle_delay: 50, // calculation throttling to increase framerate
    fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
    offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
  }
});


}());
