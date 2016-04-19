'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
