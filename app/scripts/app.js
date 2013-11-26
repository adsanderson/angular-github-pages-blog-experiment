'use strict';

angular.module('qdaghpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'adsMetadata'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });