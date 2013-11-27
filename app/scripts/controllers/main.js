'use strict';

angular.module('qdaghpApp')
  .controller('MainCtrl', function ($scope, metaData) {

    metaData.getMetaData().then(function(data){
        $scope.metaThings = data.data;
        metaData.metaData = data.data;
    });

  });