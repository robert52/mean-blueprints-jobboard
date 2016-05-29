(function() {
  'use strict';

  angular
  .module('company')
  .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/companies', {
      templateUrl: 'app/company/views/companies.html',
      controller: 'CompaniesListController as vm'
    })
    .when('/companies/create', {
      templateUrl: 'app/company/views/company-create.html',
      controller: 'CompanyCreateController as vm'      
    })
    .when('/companies/:name/:companyId', {
      templateUrl: 'app/company/views/company-detail.html',
      controller: 'CompanyDetailController as vm',
      resolve: {
        company: function($route, $location, Company) {
          return Company
          .findById($route.current.params.companyId)
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
