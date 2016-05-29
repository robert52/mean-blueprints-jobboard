(function() {
  'use strict';

  angular
  .module('profile')
  .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['user'];

  function ProfileController(user) {
    var vm = this;

    vm.user = {};

    initialize();

    function initialize() {
      vm.user = user;
    }
  }

}());
