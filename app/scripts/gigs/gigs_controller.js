(function () {

  angular.module('SecretSauce')
    .controller('GigCtrl', ['$scope', '$http', 'BlogFactory',
      function ($scope, $http, GigFactory) {

        GigFactory.getBlog().success( function (data) {
          $scope.gigs = data.results;

        });









      }]);

}());
