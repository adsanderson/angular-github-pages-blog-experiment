
angular.module('adsPosts', [])
  .controller('postCtrl', function ($scope, $routeParams, metaData, _) {
	'use strict';
    $scope.postFile = 'compiledPost/app/posts/' + $routeParams.postFile + '.html';
    // $scope.test = metaData.metaData;

	var currentPostIndex = _.findIndex(metaData.metaData, {compiledPost:$routeParams.postFile});

	$scope.prevPost = metaData.metaData[currentPostIndex - 1];
	$scope.nextPost = metaData.metaData[currentPostIndex + 1];

  });