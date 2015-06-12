'use strict';

/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbdApp
 */
//angular.module('tbdApp')
app.controller('AboutCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var ref = new Firebase("https://taller-de-base-datos.firebaseio.com/");
  $scope.messages = $firebaseArray(ref);
  console.log($scope.messages);
}]);
