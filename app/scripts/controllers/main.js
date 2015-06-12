'use strict';

/**
 * @ngdoc function
 * @name tbdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tbdApp
 */
angular.module('tbdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
