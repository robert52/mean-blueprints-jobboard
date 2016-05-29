(function() {
  'use strict';

  angular.module('common')
  .factory('SigninInterceptor', SigninInterceptor);

  SigninInterceptor.$inject = ['$q', '$location', '$window'];

  function SigninInterceptor($q, $location, $window) {
    return {
      responseError: function(rejection) {
        console.log(rejection);
        if (401 === rejection.status) {
          $window.sessionStorage.user = '';
          $location.path('/signin');
        }

        return $q.reject(rejection);
      }
    };
  }

}());
