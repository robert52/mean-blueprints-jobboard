(function() {
  'use strict';

  angular
  .module('company')
  .factory('Company', Company);

  Company.$inject = ['$http', 'config'];

  function Company($http, config) {
    var serviceBase = config.url + '/api/companies';

    var factory = {
      create: createCompany,
      findById: findCompanyByid,
      getAll: getAllCompanies,
      update: updateCompany
    };

    function createCompany(job) {
      return $http
      .post(serviceBase, job)
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function findCompanyByid(id) {
      return $http
      .get(serviceBase + '/' + id)
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function getAllCompanies(query) {
      return $http({
        url: serviceBase,
        method: "GET",
        params: query
      }).then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function updateCompany(company) {
      return $http
      .put(serviceBase + '/' + job._id, job)
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    return factory;
  }

}());
