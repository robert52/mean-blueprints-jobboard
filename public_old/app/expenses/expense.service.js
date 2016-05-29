(function() {
  'use strict';

  angular
  .module('expenses')
  .factory('Expense', Expense);

  Expense.$inject = ['$http'];

  function Expense($http) {
    var serviceBase = 'http://localhost:3000/api/expenses';
    var factory = {
      create: createExpense,
      getOne: getOneExpense,
      getAll: getAllExpenses,
      getBalance: getExpenseBalance,
      update: updateExpense,
      remove: removeExpese
    };

    function createExpense(expense) {
      return $http.post(serviceBase, expense)
      .then(function(response) {
        return response.data;
      });
    };

    function getOneExpense(id) {
      return $http.get(serviceBase + '/' + id)
      .then(function(response) {
        return response.data;
      });
    };

    function getAllExpenses(query) {
      return $http({
        url: serviceBase,
        method: "GET",
        params: query
      }).then(function(response) {
        return response.data;
      });
    };

    function getExpenseBalance(query) {
      return $http({
        url: serviceBase + '/balance',
        method: "GET",
        params: query
      }).then(function(response) {
        var data = response.data;
        data.countMessage = data.count + ' ';
        data.countMessage += (data.count > 1 || data.count !== 0) ? 'expenses' : 'expense';
        return data;
      });
    };

    function updateExpense(expense) {
      return $http.put(serviceBase + '/' + expense.id, expense)
      .then(function(response) {
        return response.data;
      });
    };

    function removeExpese(id) {
      return $http.delete(serviceBase + '/' + id)
      .then(function(response) {
        return response.data;
      });
    };

    return factory;
  }

}());
