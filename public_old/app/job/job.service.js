(function() {
  'use strict';

  angular
  .module('job')
  .factory('Job', Job);

  Job.$inject = ['$http', 'config'];

  function Job($http, config) {
    var serviceBase = config.url + '/api/jobs';

    var factory = {
      create: createJob,
      findById: findJobByid,
      getAll: getAllJobs,
      update: updateJob,
      remove: removeJob
    };

    function createJob(job) {
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

    function findJobByid(id) {
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

    function getAllJobs(query) {
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

    function updateJob(job) {
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

    function removeJob(id) {
      return $http
      .delete(serviceBase + '/' + id)
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
