(function () {

  angular.module('SecretSauce', ['ngRoute', 'ngCookies'])
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

}


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

(function (){

  angular.module('SecretSauce')
    .factory('GigFactory', ['$http', '$location', '$routeParams','PARSE_HEADERS',
      function ($http, $location, $routeParams, PARSE_HEADERS) {



        var getGig = function () {
          return $http.get('https://api.parse.com/1/classes/gig', PARSE_HEADERS);
        };

        var postGig = function () {
          return $http.post('https://api.parse.com/1/classes/gig', PARSE_HEADERS);
        };

        var getSingle = function (rid) {
          return $http.get('https://api.parse.com/1/classes/gig' + rid, PARSE_HEADERS);
        };





        return {
          getGig: getGig,
          getSingle: getSingle,
          postGig: postGig
        }

      }
    ]);
}());

(function () {

  angular.module('SecretSauce')
    .controller('GigCtrl', ['$scope', '$http', 'GigFactory',
      function ($scope, $http, GigFactory) {

        GigFactory.getGig().success(function (data) {
          $scope.gigs = data.results;

        });



      }]);

}());

(function () {

  angular.module('SecretSauce')
    .controller('UserController', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.signUp = function (user) {
          UserFactory.signUp(user);
        };

        $scope.login = function (user) {
          UserFactory.login(user);
        };

        $scope.logout = function () {
          UserFactory.logout();
        };

      }
    ]);

}());
(function () {

  angular.module('SecretSauce')
    .factory('UserFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location,  $cookieStore, PARSE_HEADERS) {


        var signUp = function (user) {
          $http.post('https://api.parse.com/1/users/', user, PARSE_HEADERS).success(function (data) {
            $location.path('/');
          });
        };

        var login = function (user) {
          var params = '?username=' + user.username + '&password=' + user.password;
          $http.get('https://api.parse.com/1/login/' + params, PARSE_HEADERS)
            .success(function (data) {
              $location.path('/views/dashboard.html');
              $cookieStore.put('currentUser', data);
              return checkUser();
            });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return checkUser();
        };


        var checkUser = function (user) {
          var user = $cookieStore.get('currentUser');
          if(user) {
            $('#user').html('Welcome back ' + user.username);
            $('.loginbtn').hide();
            $('.signupbtn').hide();
            $location.path('/profile');
          } else {
            $('#user').html('Please Log In');
            $location.path('/login');
          }
        };

        var currentUser = function () {
          return $cookieStore.get('currentUser');
        }


        return {
          login: login,
          logout: logout,
          signUp: signUp,
          checkUser: checkUser

        }
      }

    ]);

}());