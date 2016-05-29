(function() {
  'use strict';

  angular
  .module('job')
  .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/jobs', {
      templateUrl: 'app/job/views/jobs-list.html',
      controller: 'JobsListController as vm'
    })
    .when('/jobs/create', {
      templateUrl: 'app/job/views/job-create.html',
      controller: 'JobCreateController as vm'
    })
    .when('/jobs/:title/:jobId', {
      templateUrl: 'app/job/views/job-detail.html',
      controller: 'JobDetailController as vm',
      resolve: {
        job: function($route, $location, Job) {
          return Job
          .findById($route.current.params.jobId)
          .then(function(company) {

            if (company.message === 'Not found.') {
              $location.path('/404');
              return;
            }

            return company;
          });
        }
      }
    });
  }

}());
