(function () {

  angular.module('SecretSauce', ['ngRoute'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': '3vYR3T8u46KqNTov1do3NKHDXFUShDbJeEayMyn7',
        'X-Parse-REST-API-Key': '9wgGdPer1Ht6fal1OP5oJeyeQFPD39DffF1AzOF4',
        'Content-Type': 'application/json'
      }
    })
        .config(function ($routeProvider) {


        $routeProvider.when('#/user-sign-in', {
          templateUrl: 'views/signin.html',
          controller: 'UserCtrl'
        });

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
    active_class: 'active',
    threshold: 0,
    destination_threshold: 20,
    throttle_delay: 50,
    fixed_top: 0,
    offset_by_height: true
  }
});


$('.nav-btn').click(function (){
  $('.nav').slideToggle();
});
$('.nav').removeAttr('style');
$(".nav li").on("click",function(){
  $('.nav').slideUp();
});

  
}());
