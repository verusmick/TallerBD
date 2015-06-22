'use strict';
/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # EntradasCtrl
 * Controller of the tbdApp
 */
//angular.module('tbdApp')
app.controller('ProveedorsCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/entradas");
  var provRef = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/proveedor");
  $scope.entradas = $firebaseArray(ref);
  $scope.proveedores = $firebaseArray(provRef);
  console.log($scope.proveedor);
  $scope.editObject = {
    'nombre':'',
    'telefono':'',
    'direccion':''
  };  
    $scope.crearObject = {
    'nombre':'',
    'telefono':'',
    'direccion':''    
  }; 

  $scope.resetMas = function(){
    $scope.crearObject = {
      'nombre':'',
      'telefono':'',
      'direccion':''
  } 
  };

  $scope.selectProv = function(data){
    $scope.editObject['nombre'] = $scope.proveedores[data].nombre;
    $scope.editObject['telefono'] = $scope.proveedores[data].telefono;
    $scope.editObject['direccion'] = $scope.proveedores[data].direccion;
    $scope.editObject['value'] = data;
  };

  $scope.editProv = function(item){
      $scope.proveedores[item].nombre = $scope.editObject['nombre'];
      $scope.proveedores[item].telefono = $scope.editObject['telefono'];
      $scope.proveedores[item].direccion = $scope.editObject['direccion'];      
      $scope.proveedores.$save(item);
  };
  $scope.deleteProv = function(item){  
    $scope.proveedores.$remove($scope.proveedores[item]);
  };

  $scope.crearProv = function(){
    $scope.proveedores.$add($scope.crearObject);
  }

}]);