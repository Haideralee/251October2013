'use strict';

angular.module('baberlistApp')
  .controller('BabertodoCtrl', function ($scope, $http) {
    $scope.item = "";
    $scope.todoList = [];
    $scope.todoList.push({
        name:"Halwa",
        qty:"5KG"
    });
    $scope.todoList.push({
        name:"Faluda",
        qty:"2"
    });
    $scope.addItem = function (){
        //alert("item = "+$scope.item);
        $scope.todoList.push({
            name: $scope.item,
            qty: "2KG"
        });
        /*
        $http.get('/abc').success(function(awesomeThings) {
            //$scope.awesomeThings = awesomeThings;
        });
        */
    }
        /*
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    */
  });
