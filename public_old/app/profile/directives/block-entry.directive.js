(function() {
  'use strict';

  angular
  .module('profile')
  .directive('blockEntry', BlockEntryDirective)

  function BlockEntryDirective(Auth, Profile) {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        ngModel: '=',
        block: '=block'
      },
      templateUrl: 'app/profile/views/entry.html',
      controller: function() {
        var vm = this;

        vm.saveEntry = saveEntry;

        function saveEntry() {
          var data = angular.copy(vm.block);

          return Profile
          .updateBlock(Auth.currentUser._id, data)
          .then(function(block) {
            vm.block = block;

            return block;
          });
        }
      }
    };
  }

}());
