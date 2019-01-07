var app = angular.module('app', ['ngRoute', 'locationProvider']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);


app.controller('postcontroller', function($scope, $http, $location) {
    $scope.submitForm = function(){
        var url = $location.absUrl() + "postcustomer";

        var config = {
            headers : {
                'Accept': 'text/plain'
            }
        }
        var data = {
            firstname: $scope.firstname,
            lastname: $scope.lastname
        };

        $http.post(url, data, config).then(function (response) {
            $scope.postResultMessage = response.data;
        }, function error(response) {
            $scope.postResultMessage = "Error with status: " +  response.statusText;
        });

        $scope.firstname = "";
        $scope.lastname = "";
    }
});

app.controller('getcontroller', function($scope, $http, $location) {
    $scope.getfunction = function(){
        var url = $location.absUrl() + "getallcustomer";

        $http.get(url).then(function (response) {
            $scope.response = response.data
        }, function error(response) {
            $scope.postResultMessage = "Error with status: " +  response.statusText;
        });
    }
});

app.controller('users', function($scope, $http) {
    $http.get('/users').success(function(data) {
        $scope.headingTitle = "User List";
        $scope.users = data;
    })
});

app.controller('roles', function($scope, $http) {
    $http.get('/roles').success(function(data) {
        $scope.headingTitle = "Roles List";
        $scope.roles = data;
    })
});


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/users',{
            templateUrl: 'users.html',
            controller: 'users'
        })
        .when('/roles',{
            templateUrl: 'roles.html',
            controller: 'roles'
        })
        .when('/getallcustomer',{
        templateUrl: 'index.html',
        controller: 'users'
        })
        .when('/roles',{
            templateUrl: 'roles.html',
            controller: 'roles'
        })
        .otherwise(
            { redirectTo: '/' }
        );
}]);
