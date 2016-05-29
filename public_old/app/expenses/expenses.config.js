(function() {
  'use strict';

  angular
  .module('expenses')
  .config(config);

  function config($routeProvider) {
    $routeProvider.when('/expenses', {
      templateUrl: 'app/expenses/expenses.html',
      controller: 'ExpensesController as vm',
      resolve: {
        categories: function(Category) {
          return Category.getAll().then(function(result) {
            return result;
          });
        }
      }
    });
  }

}());
