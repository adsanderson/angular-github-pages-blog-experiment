// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('adsMetadata', [])
	.factory('metaData', function ($http) {
	'use strict';

	return {
		getMetaData: function() {
			var promise = $http.jsonp('data/metadata.json').then(function (response) {
				return response;
			});
			return promise;
		}
	};
});