// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('adsMetadata', [])
	.factory('metadata', function($rootScope, $http) {
    var metadata = {};

    metadata.data = {};

    //Gets the list of nuclear weapons
    metadata.getMetaData = function() {
    	if (typeof metadata.data.meta === 'undefined') {
	        $http.get('data/metadata.json')
	            .success(function(data) {
	                metadata.data.meta = data;
	            });
        }
        return metadata.data;
    };

    return metadata;
});