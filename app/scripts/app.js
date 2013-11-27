'use strict';

angular.module('qdaghpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'adsMetadata',
  'adsPosts'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'MainCtrl'
      })
      .when('/:postFile', {
        templateUrl: 'views/post.html',
        controller: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });