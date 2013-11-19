// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('testtest', [])
	.factory('apiCall', function ($http) {
	'use strict';

	var githubapi = 'https://api.github.com';
	var repo = '/repos/adsanderson/qdaghp-blog';
	var type = '/contents';
	var path = '/app/posts/Test_markdown_post.md';

	return {
		getPost: function() {
			var promise = $http.get(githubapi + repo + type + path, {headers: {"Content-Type": 'application/vnd.github.v3.raw+json'}}).then(function (response) {
				return response.data;
			});
			return promise;
		}
	};
});