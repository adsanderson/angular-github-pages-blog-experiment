'use strict';

angular.module('adsPosts', [])
  .controller('postCtrl', function ($scope, $routeParams, metaData) {

    $scope.postFile = 'compiledPost/app/posts/' + $routeParams.postFile + '.html';

  });