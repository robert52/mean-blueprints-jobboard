(function() {
  'use strict';

  angular
  .module('job')
  .controller('JobsListController', JobsListController);

  JobsListController.$inject = ['Job'];

  function JobsListController(Job) {
    var vm = this;

    /**
     *  Bindables
     */
    vm.jobs = [];
    vm.filter = {};

    /**
     *  Exported methods
     */

    initialize();

    function initialize() {
      getAllJobs();
    }

    function getAllJobs() {
      return Job.getAll(vm.filter).then(function(jobs) {
        vm.jobs = jobs;

        return jobs;
      });
    }
  }

}());
