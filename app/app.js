var myApp = angular.module("myModule",[]);

myApp.controller("myController", function($scope)
{
// $scope.showLoader = true;

    $scope.myvalue = false;
    
    angular.element(function () {
        $scope.showLoader = false;   
    });

    $scope.toggleClass = function (event){
       if($scope.myvalue == false)
       {
        $scope.myvalue = true;  
       }
       else{
        $scope.myvalue =  false;  
       }
     
    }

});

