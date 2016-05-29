(function() {
  'use strict';

  angular
  .module('categories')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['Category'];

  function CategoriesController(Category) {
    var vm = this;
    vm.categories = [];
    vm.newCategory = {};
    vm.addCategory = addCategory;
    vm.saveCategory = saveCategory;

    initialize();

    function initialize() {
      getCategories();
    }

    function getCategories() {
      return Category.getAll().then(function(categories) {
        vm.categories = categories
        return vm.categories;
      });
    }

    function addCategory() {
      var newCategory = angular.copy(vm.newCategory);
      return Category.create(newCategory).then(function(category) {
        vm.categories.push(category);
      });
    }

    function saveCategory(category) {
      return Category.update(category).then(function(updatedCategory) {
        category = updatedCategory;
        return category;
      });
    }
  }
}());
