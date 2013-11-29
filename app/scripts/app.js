'use strict';

angular.module('qdaghpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'lodash',
  'adsMetadata',
  'adsPosts'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/blog.html',
        controller: 'MainCtrl'
      })
      .when('/:postFile', {
        templateUrl: 'app/views/post.html',
        controller: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });