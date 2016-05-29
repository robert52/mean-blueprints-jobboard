(function() {
  'use strict';

  angular
  .module('company')
  .controller('CompaniesListController', CompaniesListController);

  CompaniesListController.$inject = ['Company'];

  function CompaniesListController(Company) {
    var vm = this;

    /**
     *  Bindables
     */
    vm.companies = [];

    /**
     *  Exported methods
     */

    initialize();

    function initialize() {
      getAllCompanies();
    }

    function getAllCompanies(id) {
      return Company.getAll().then(function(companies) {
        vm.companies = companies;

        return companies;
      });
    }
  }

}());
