(function() {
  'use strict';

  angular
  .module('categories')
  .config(config);

  function config($routeProvider) {
    $routeProvider.when('/categories', {
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesController as vm'
    });
  }

}());
