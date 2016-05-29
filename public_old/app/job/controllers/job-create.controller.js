(function() {
  'use strict';

  angular
  .module('job')
  .controller('JobCreateController', JobCreateController);

  JobCreateController.$inject = ['$location', 'Job', 'industries', 'countries', 'jobtypes'];

  function JobCreateController($location, Job, industries, countries, jobtypes) {
    var vm = this;

    vm.job = {};
    vm.industries = [];
    vm.countries = [];
    vm.jobtypes = [];
    vm.selected = {};

    vm.createJob = createJob;
    vm.selectedIndustry = selectedIndustry;
    vm.selectedCountry = selectedCountry;
    vm.selectedType = selectedType;

    initialize();

    function initialize() {
      vm.industries = industries;
      vm.countries = countries;
      vm.jobtypes = jobtypes;
    }

    function createJob() {
      var data = angular.copy(vm.job);

      Job
      .create(data)
      .then(function(job) {
        if (!job.error) {
          $location.path('/jobs/' + job.slug + '/' + job._id);
        }
      });
    }

    function selectedIndustry($item) {
      vm.job.industry = $item.slug;
    }

    function selectedCountry($item) {
      vm.job.country = $item.code;
    }

    function selectedType($item) {
      vm.job.type = $item.slug;
    }
  }

}());
