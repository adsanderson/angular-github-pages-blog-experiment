'use strict';

angular.module('qdaghpApp')
  .controller('MainCtrl', function ($scope, metadata) {

    // metaData.getMetaData().then(function(data){
    //     // $scope.metaThings = data.data;
    //     // metaData.metaData = data.data;
    //     $scope.metaThings = metaData.metaData;
    // });

    $scope.metaThings = metadata.getMetaData();

  });