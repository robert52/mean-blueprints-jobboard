(function() {
  'use strict';

  angular
  .module('auth')
  .factory('Auth', Auth);

  Auth.$inject = ['$http', '$window', '$location', 'config'];

  function Auth($http, $window, $location, config) {
    var serviceBase = config.url + '/auth';
    var factory = {
      initialize: initialize,
      register: registerUser,
      signin: signinUser,
      signout: signoutUser,
      currentUser: null
    };

    function initialize() {
      factory.currentUser = getCurrentUser();
    }

    function registerUser(user) {
      return $http
      .post(serviceBase + '/signup', user)
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function signinUser(user) {
      return $http
      .post(serviceBase + '/signin', user)
      .then(function(response) {
        var data = response.data;

        if (!data.error) {
          setCurrentUser(data);
        }

        return data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;

        destroyCurrentUser();

        return err.data;
      });
    }

    function signoutUser() {

      destroyCurrentUser();
    }

    function getAuthUser() {
      return $http
      .get(serviceBase + '/auth')
      .then(function(response) {
        return response.data;
      });
    }

    function getCurrentUser() {
      var user = JSON.parse($window.sessionStorage.user || null);
      return user;
    }

    function setCurrentUser(data) {
      $window.sessionStorage.user = JSON.stringify(data);
      factory.currentUser = data;
    }

    function destroyCurrentUser() {
      $window.sessionStorage.user = '';
      factory.currentUser = null;
    }

    return factory;
  }

}());
