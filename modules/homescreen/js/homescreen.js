angular.module('home',[])
.controller('homescreenctrl',function($scope,socket){
    $scope.msgdata="egtgrtg";
    $scope.sendData=function(){
        /*console.log($scope.msgdata);
        socket.emit("senddata",{sendername:"neels",senderdata:$scope.msgdata});
    socket.on("getdata",function(data){
        console.log(data);
        $scope.msgdata=data.senderdata;
    });*/
        console.log($scope.msgdata);
        $scope.$apply();
    }
  
});
