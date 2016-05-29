(function() {
  'use strict';

  angular
  .module('jbapp')
  .config(config)
  .run(run);

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/jobs'
    });
  }

  run.$inject = ['Auth'];

  function run(Auth) {
    Auth.initialize();
  }

}());
