'use strict';
/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # EntradasCtrl
 * Controller of the tbdApp
 */
//angular.module('tbdApp')
app.controller('EntradasCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/entradas");
  $scope.entradas = $firebaseArray(ref);
  console.log($scope.entradas);

  $scope.editEntrada = function(item){
    //var item = parseInt(item);
    //console.log(typeof(item));  
    
    $scope.entradas[item].nombre = 'micky';
    console.log($scope.entradas[item].nombre);
    $scope.entradas.$save(item);


    //$scope.entradas[parseInt(whereEnt)].nombre;
    //$scope.entradas.$save(parseInt(whereEnt));



  };
  $scope.deleteEntrada = function(item){
    console.log(item);
    console.log(typeof(item));  
    
    $scope.entradas.$remove($scope.entradas[item]);



  };
  






}]);