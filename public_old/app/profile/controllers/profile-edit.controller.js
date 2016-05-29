(function() {
  'use strict';

  angular
  .module('profile')
  .controller('ProfileEditController', ProfileEditController);

  ProfileEditController.$inject = ['Profile', 'user'];

  function ProfileEditController(Profile, user) {
    var vm = this;

    vm.user = {};
    vm.newBlock = {
      title: '',
      data: [
        { title: '', subTitle: '', description: '' }
      ]
    };

    vm.addBlock = addBlock;

    initialize();

    function initialize() {
      vm.user = user;

      if (vm.user.profile.length === 0) {
        vm.user.profile = defaultProfileStructure();
      }
    }

    function addBlock() {
      vm.user.profile.push(angular.copy(vm.newBlock));
    }

    function defaultProfileStructure() {
      return [
        {
          "title": "Experience",
          "slug": "experience",
          "data": [
            {
              "title": "",
              "subTitle": "",
              "description": ""
            }
          ]
        },
        {
          "title": "Education",
          "slug": "education",
          "data": [
            {
              "title": "",
              "subTitle": "",
              "description": ""
            }
          ]
        }
      ];
    }
  }

}());
