
angular.module('adsPosts', [])
  .controller('postCtrl', function ($scope, $routeParams, $filter, metadata, _) {
	'use strict';
    $scope.postFile = 'compiledPost/app/posts/' + $routeParams.postFile + '.html';
    $scope.test = metadata.getMetaData();
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
  }).filter('title', function ($routeParams, _) {
    'use strict';
    return function(input) {
        var out = false;
        var currentPost = _.find(input.meta, {compiledPost:$routeParams.postFile});

        if (typeof currentPost !== 'undefined') {
           out = currentPost.title
        }

        return out;
    };
  });