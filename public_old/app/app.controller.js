(function() {
  'use strict';

  angular
  .module('jbapp')
  .controller('AppController', AppController);

  AppController.$inject = ['$scope', 'Auth', 'Company'];

  function AppController($scope, Auth, Company) {
    var vm = this;
    vm.user = {};
    vm.signout = signout;

    initialize();

    function initialize() {
      vm.user = Auth.currentUser;
    }

    function signout() {
      Auth.signout();
    }

    $scope.$watch(function watchCurrentUser() {
      return Auth.currentUser;
    }, function(newValue, oldValue) {
      vm.user = newValue;
    });
  }

}());
