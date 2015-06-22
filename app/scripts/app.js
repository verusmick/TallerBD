'use strict';

/**
 * @ngdoc overview
 * @name tbdApp
 * @description
 * # tbdApp
 *
 * Main module of the application.
 */
var app = angular.module('tbdApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/entradas', {
        templateUrl: 'views/entradas.html',
        controller: 'EntradasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
