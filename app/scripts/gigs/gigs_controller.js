(function () {

  angular.module('SecretSauce')
    .controller('GigCtrl', ['$scope', '$http', 'GigFactory',
      function ($scope, $http, GigFactory) {

        GigFactory.getGig().success( function (data) {
          $scope.gigs = data.results;

        });



      }]);

}());
