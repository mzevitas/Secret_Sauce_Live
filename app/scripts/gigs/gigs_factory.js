(function (){

  angular.module('SecretSauce')
    .factory('GigFactory', ['$http', '$location', '$routeParams','PARSE_HEADERS',
      function ($http, $location, $routeParams, PARSE_HEADERS) {



        var getGig = function () {
          return $http.get('https://api.parse.com/1/classes/gig/', PARSE_HEADERS);
        };


        //var getSingle = function (rid) {
        //  return $http.get('https://api.parse.com/1/classes/gig/' + rid, PARSE_HEADERS);
        //};



        return {
          getGig: getGig
          //getSingle: getSingle
        }

      }
    ]);
}());
