(function (){

    angular.module('SecretSauce')
        .factory('UserFactory', ['$http', '$location', '$routeParams','PARSE_HEADERS',
            function ($http, $location, $routeParams, PARSE_HEADERS) {



                var getUser = function () {
                    return $http.get('https://api.parse.com/1/classes/User', PARSE_HEADERS);
                };

                var postUser = function () {
                    return $http.post('https://api.parse.com/1/classes/User', PARSE_HEADERS);
                };







                return {
                   getUser: getUser,
                   postUser: postUser
                }

            }
        ]);
}());
