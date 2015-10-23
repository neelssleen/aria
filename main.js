angular.module('projectx',['ngRoute','home','signin','signup'])
.controller('projectxctrl',function($scope,$rootScope,$location){
    
    $rootScope.goto=function(path){
        $location.path(path);
    }

})
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $routeProvider
    .when('', {
                redirectTo: '/signin'
    })
    .when('/home',{
        templateUrl:'modules/homescreen/index.html',
        controller:'homescreenctrl'
    })
    .when('/signin',{
        templateUrl:'modules/signin/index.html',
        controller:'signinctrl'
    })
    .when('/signup',{
        templateUrl:'modules/signup/index.html',
        controller:'signupctrl'
    })
    .otherwise({
                redirectTo: '/signin'
    });
    $locationProvider.html5Mode(true);
}]);
