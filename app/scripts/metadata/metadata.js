// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('adsMetadata', [])
	.factory('metaData', function ($http) {
	'use strict';

	var responseData = [{title:'test'}];

	return {
		metaData: responseData,
		getMetaData: function() {
			var self = this;
			var promise = $http.get('data/metadata.json').then(function (response) {
				self.metaData = response.data;
				return response;
			});
			return promise;
		}
	};
});