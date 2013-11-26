// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('adsMetadata', [])
	.factory('metaData', function ($http) {
	'use strict';

	return {
		metaData: undefined,
		getMetaData: function() {
			var self = this;
			var promise = $http.get('data/metadata.json').then(function (response) {
				return response;
			});
			return promise;
		}
	};
});