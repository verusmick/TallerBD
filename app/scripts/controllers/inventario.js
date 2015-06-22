'use strict';
/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # EntradasCtrl
 * Controller of the tbdApp
 */
//angular.module('tbdApp')
app.controller('InventarioCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/entradas");
  var provRef = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/proveedor");
  var inventarioRef = new Firebase("https://taller-de-base-datos.firebaseio.com/restaurante/inventario");
  $scope.entradas = $firebaseArray(ref);
  $scope.proveedores = $firebaseArray(provRef);
  $scope.inventarios = $firebaseArray(inventarioRef);
  $scope.details={
    entradas:{},
    salidas:{}
  };
  $scope.totales={
    cantidadTotal:'',
    precioTotal:''
  };

  $scope.inventarioDetail = function(data, param){
    $scope.details.entradas = data.entradas;


    $scope.totales.cantidadTotal = $scope.inventarios[param].cantidadTotal;
    $scope.totales.precioTotal = $scope.inventarios[param].precioTotal;
  };

}]);
