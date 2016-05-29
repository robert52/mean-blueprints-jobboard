(function() {
  'use strict';

  angular
  .module('categories')
  .factory('Category', Category);

  Category.$inject = ['$http'];

  function Category($http) {
    var serviceBase = 'http://localhost:3000/api/categories';
    var factory = {
      create: createCategory,
      getOne: getOneCategory,
      getAll: getAllCategory,
      update: updateCategory,
      remove: removeCategory
    };

    function createCategory(expense) {
      return $http.post(serviceBase, expense).then(function(response) {
        return response.data;
      });
    };

    function getOneCategory(id) {
      return $http.get(serviceBase + '/' + id).then(function(response) {
        return response.data;
      });
    };

    function getAllCategory() {
      return $http.get(serviceBase).then(function(response) {
        return response.data;
      });
    };

    function updateCategory(category) {
      return $http.put(serviceBase + '/' + category._id, category).then(function(response) {
        return response.data;
      });
    };

    function removeCategory(id) {
      return $http.delete(serviceBase + '/' + id).then(function(response) {
        return response.data;
      });
    };

    return factory;
  }

}());
