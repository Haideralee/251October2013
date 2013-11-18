'use strict';

angular.module('baberlistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/babertodo', {
        templateUrl: 'views/babertodo.html',
        controller: 'BabertodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
