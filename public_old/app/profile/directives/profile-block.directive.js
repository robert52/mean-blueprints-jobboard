(function() {
  'use strict';

  angular
  .module('profile')
  .directive('profileBlock', ProfileBlockDirective)

  function ProfileBlockDirective() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/profile/views/block.html',
      controller: function() {
        var vm = this;

        vm.addEntry = addNewEntry;

        function addNewEntry() {
          vm.ngModel.data.push({
            title: '',
            subTitle: '',
            description: ''
          });
        }
      }
    };
  }

}());
