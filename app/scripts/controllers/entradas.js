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
  var provRef = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/proveedor");
  $scope.entradas = $firebaseArray(ref);
  $scope.proveedor = $firebaseArray(provRef);
  console.log($scope.proveedor);
    console.log($scope.entradas);
  $scope.editEntrada = {
    'nombre':'',
    'cantidad':'',
    'precioCompra':'',
    'proveedor':''    
  };  
    $scope.crearObject = {
    'nombre':'',
    'cantidad':'',
    'precioCompra':'',
    'proveedor':''    
  }; 

  $scope.resetMas = function(){
    $scope.crearObject = {
      'nombre':'',
      'cantidad':'',
      'precioCompra':'',
      'proveedor':''
  } 
  };

  $scope.selectEntrada = function(data){
    $scope.editEntrada['nombre'] = $scope.entradas[data].nombre;
    $scope.editEntrada['cantidad'] = $scope.entradas[data].cantidad;
    $scope.editEntrada['precioCompra'] = $scope.entradas[data].precioCompra;
    $scope.editEntrada['proveedor'] = $scope.entradas[data].proveedor;
    $scope.editEntrada['value'] = data;
  };

  $scope.editEntrada = function(item){
      $scope.entradas[item].nombre = $scope.editEntrada['nombre'];
      $scope.entradas[item].cantidad = $scope.editEntrada['cantidad'];
      $scope.entradas[item].precioCompra = $scope.editEntrada['precioCompra'];
      $scope.entradas[item].proveedor = $scope.editEntrada['proveedor'];      
      $scope.entradas.$save(item);
  };
  $scope.deleteEntrada = function(item){
    console.log(item);
    console.log(typeof(item));      
    $scope.entradas.$remove($scope.entradas[item]);
  };

  $scope.crearEntrada = function(){
    $scope.entradas.$add($scope.crearObject);
  }

}]);