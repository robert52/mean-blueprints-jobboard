(function() {
  'use strict';

  angular
  .module('expenses')
  .controller('ExpensesController', ExpensesController);

  ExpensesController.$inject = ['Expense', 'categories'];

  function ExpensesController(Expense, categories) {
    var vm = this;

    vm.expenses = [];
    vm.newExpense = {};
    vm.categorySelect = '';
    vm.categories = categories;
    vm.balance = {};    
    vm.filter = {};
    vm.categoryFilterSelect = '';
    vm.hasFilter = false;
    vm.status = {};
    vm.maxDate = new Date();

    vm.addExpense = addExpense;
    vm.setExpenseCategory = setExpenseCategory;
    vm.filterExpenses = filterExpenses;
    vm.setCategoryFilter = setCategoryFilter;
    vm.filterClear = filterClear;

    initialize();

    function initialize() {
      getExpenses();
      getBalance();
    }

    function getExpenses() {
      return Expense.getAll(vm.filter).then(function(expenses) {
        vm.expenses = expenses;
        return vm.expenses;
      });
    }

    function addExpense() {
      var newExpense = angular.copy(vm.newExpense);
      return Expense.create(newExpense).then(function(expense) {
        initialize();
      });
    }

    function getBalance() {
      return Expense.getBalance(vm.filter).then(function(balance) {
        vm.balance = balance;
        return vm.balance;
      });
    }

    function setExpenseCategory(category) {
      vm.newExpense.category = category._id;
    }

    function filterExpenses() {
      vm.hasFilter = true;
      initialize();
    }

    function setCategoryFilter(category) {
      vm.filter.category = category._id;
    }

    function filterClear() {
      vm.filter = {};
      vm.hasFilter = false;
      vm.categoryFilterSelect = '';
      initialize();
    }
  }
}());
