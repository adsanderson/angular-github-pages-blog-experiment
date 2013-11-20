'use strict';

angular.module('qdaghpApp')
  .controller('MainCtrl', function ($scope, metaData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    metaData.getMetaData().then(function(data){
        $scope.metaThings = data;
    });

  });