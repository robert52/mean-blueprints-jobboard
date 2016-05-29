(function() {
  'use strict';

  angular
  .module('company')
  .controller('CompanyCreateController', CompanyCreateController);

  CompanyCreateController.$inject = ['$location', 'Company', 'countries'];

  function CompanyCreateController($location, Company, countries) {
    var vm = this;

    vm.company = {};
    vm.countries = [];

    vm.createCompany = createCompany;
    vm.selectedCountry = selectedCountry;

    initialize();

    function initialize() {
      vm.countries = countries;
    }

    function createCompany() {
      var data = angular.copy(vm.company);

      Company
      .create(data)
      .then(function(company) {

        // just redirect the user to the company's page
        $location.path('/companies/' + company.slug + '/' + company._id);
      });
    }

    function selectedCountry($item) {
      vm.company.country = $item.code;
    }
  }

}());
