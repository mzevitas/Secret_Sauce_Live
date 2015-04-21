$(document).ready(function() {

  var id = '#dialog';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  //transition effect
  $('#mask').fadeIn(500);
  $('#mask').fadeTo("slow",0.9);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(1000);

  //if close button is clicked
  $('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
  });

  //if mask is clicked
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
