'use strict';

/**
 * @ngdoc function
 * @name tbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbdApp
 */
angular.module('tbdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
