angular.module('signin',[])
.controller('signinctrl',function($scope,$location,$rootScope){

    $scope.signinuser=function(user){
        if(user.nickname.length==0||user.password.length==0){
        
        }else{
        $rootScope.username=user.nickname;
        $location.path('/home')
        }
        
    }
});
