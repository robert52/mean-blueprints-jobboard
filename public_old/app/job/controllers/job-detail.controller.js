(function() {
  'use strict';

  angular
  .module('job')
  .controller('JobDetailController', JobDetailController);

  JobDetailController.$inject = ['$routeParams', 'Job', 'job'];

  function JobDetailController($routeParams, Job, job) {
    var vm = this;

    /**
     *  Bindables
     */
    vm.job = job;

    /**
     *  Exported methods
     */
    vm.applyNow = applyToJob;

    function applyToJob(id) {
      // TODO: implement apply now funcitonality
    }
  }

}());
