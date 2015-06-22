'use strict';
/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbdApp
 */
//angular.module('tbdApp')
app.controller('AboutCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var ref = new Firebase("https://taller-de-base-datos.firebaseio.com/");
  var restauranteRef = ref.child("restaurante");
  restauranteRef.set({
  	inventario:[
      {
        nombre: 'tomate',
        cantidadTotal: 7,
        precioTotal: 20,
        entradas:[
          {
            nombre: 'tomate',
            precioCompra: 10,
            cantidad: 5,
            proveedor:{
              nombre:'zaragosa',
              direccion:'avenida n°123',
              telefono:'12321'
            }
          },
          {
            nombre: 'tomate',
            precioCompra: 10,
            cantidad: 2,
            proveedor:{
              nombre:'zaragosa',
              direccion:'avenida n°123',
              telefono:'12321'
            }
          }
        ]
      },
      {
        nombre: 'arroz',
        cantidadTotal: 5,
        precioTotal: 10,
        entradas: [
          {
            nombre: 'arroz',
            precioCompra: 10,
            cantidad: 5,
            proveedor: {
              nombre:'peredo',
              direccion:'avenida n°123',
              telefono:'12321'
            }
          }
        ]
      }
    ],
  	proveedor:[
  		{
  			nombre:'zaragosa',
  			direccion:'avenida n°123',
  			telefono:'12321'
  		},
  		{
  			nombre:'peredo',
  			direccion:'avenida n°123',
  			telefono:'12321'
  		}
  	],
    entradas:[
      {
        nombre: 'tomate',
        precioCompra: 10,
        cantidad: 5,
        proveedor:{
          nombre:'zaragosa',
          direccion:'avenida n°123',
          telefono:'12321'
        }
      },
      {
        nombre: 'arroz',
        precioCompra: 10,
        cantidad: 5,
        proveedor: {
          nombre:'peredo',
          direccion:'avenida n°123',
          telefono:'12321'
        }
      }
      ]
    ,
    salidas:{
      salidas1 : {
        nombre: 'arroz',
        precioCompra: 10,
        cantidad: 5,
        proveedor: 'peredo'
      }
    }
  });
}]);
