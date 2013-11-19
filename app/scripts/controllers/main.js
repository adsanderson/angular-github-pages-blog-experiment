'use strict';

angular.module('qdaghpApp')
  .controller('MainCtrl', function ($scope, apiCall) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    apiCall.getPost();

  });