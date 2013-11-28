
angular.module('adsPosts', [])
  .controller('postCtrl', function ($scope, $routeParams, $filter, metadata, _) {
	'use strict';
    $scope.postFile = 'compiledPost/app/posts/' + $routeParams.postFile + '.html';
    // $scope.test = metaData.metaData;

    $scope.test = metadata.getMetaData();

	$scope.currentPostIndex = _.findIndex( $scope.test.meta, {compiledPost:$routeParams.postFile});

	// console.log('cpi = ' + currentPostIndex);



	//$scope.prevPost = metadata.getMetaData().meta[_.findIndex(metadata.getMetaData().meta, {compiledPost:$routeParams.postFile}) - 1];
	//$scope.nextPost = metadata.getMetaData().data[currentPostIndex + 1];

	// $scope.prevPost = $filter('prevNext')($scope.test, false);
	// $scope.nextPost = $filter('prevNext')($scope.test, true);

  }).filter('prevNext', function ($routeParams, _) {
	'use strict';
	return function(input, next) {
		var out = false;
		var currentPostIndex = _.findIndex(input.meta, {compiledPost:$routeParams.postFile});

		if (currentPostIndex !== -1) {
			if (next && currentPostIndex < input.meta.length ) {
				out = input.meta[currentPostIndex + 1].compiledPost;
			} else if (currentPostIndex > 0){
				out = input.meta[currentPostIndex - 1].compiledPost;
			}
		}

		return out;
	};
  });