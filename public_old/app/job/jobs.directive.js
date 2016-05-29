(function() {
  'use strict';

  angular
  .module('job')
  .directive('jobs', JobsDirective)

  function JobsDirective() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        jobs: '=data'
      },
      templateUrl: 'app/job/views/jobs.html',
      controller: function() {

      }
    };
  }

}());
