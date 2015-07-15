;(function () {


   'use strict';



angular.module('app', [])
    .constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': 'RBIg848SejjBwRjJgCFobwJesEan2nd2TzCU6oSq',
                'X-Parse-REST-API-Key': 'MdMDZR1bD02sD8UPu97Hxk9MrGT0NJoMvwiyrbk0',
                'Content-Type': 'application/json'
            }

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
