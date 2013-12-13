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
        templateUrl: 'app/theme/views/blog.html'
      })
      .when('/:postFile', {
        templateUrl: 'app/theme/views/post.html',
        controller: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });