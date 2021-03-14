(function(){
    'use strict';
    let x=5;
    angular.module('myFirstApp',[])
    .controller('myFirstController',function($scope){
        $scope.name="Biswajit"
        $scope.sayHello=function(){
            return "Hello Angular";
        }
    });

})();



