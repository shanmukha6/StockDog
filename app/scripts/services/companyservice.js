'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.CompanyService
 * @description
 * # CompanyService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('CompanyService', function CompanyService($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('companies.json')
  });
