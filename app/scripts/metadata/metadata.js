// angular.module('githubapi', [
// 	'githubapi.service'
// ]);

angular.module('adsMetadata', [])
	.factory('metadata', function ($rootScope, $http, _) {
        'use strict';
        var metadata = {};

        metadata.data = {};

        //Gets the list of nuclear weapons
        metadata.getMetaData = function() {
            if (typeof metadata.data.meta === 'undefined') {
                $http.get('data/metadata.json')
                    .success(function(data) {
                        metadata.data.meta = _.sortBy(data, 'creationDate').reverse();
                    });
            }
            return metadata.data;
        };

        return metadata;
    });