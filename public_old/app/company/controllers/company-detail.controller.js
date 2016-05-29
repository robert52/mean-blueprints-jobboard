(function() {
  'use strict';

  angular
  .module('company')
  .controller('CompanyDetailController', CompanyDetailController);

  CompanyDetailController.$inject = ['$routeParams', 'Job', 'company'];

  function CompanyDetailController($routeParams, Job, company) {
    var vm = this;

    /**
     *  Bindables
     */
    vm.jobs = [];
    vm.company = company;

    /**
     *  Exported methods
     */

    initialize();

    function initialize() {
      getCompanyJobs($routeParams.companyId);
    }

    function getCompanyJobs(id) {
      return Job.getAll({ company: id }).then(function(jobs) {
        vm.jobs = jobs;

        return jobs;
      });
    }
  }

}());
