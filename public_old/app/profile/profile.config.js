(function() {
  'use strict';

  angular
  .module('profile')
  .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/profile/edit', {
      templateUrl: 'app/profile/views/profile-edit.html',
      controller: 'ProfileEditController as vm',
      resolve: {
        user: function(Auth, Profile) {
          return Profile
          .getByUser(Auth.currentUser._id)
          .then(function(user) {
            return user;
          });
        }
      }
    })
    .when('/profile/:userId', {
      templateUrl: 'app/profile/views/profile.html',
      controller: 'ProfileController as vm',
      resolve: {
        user: function($route, $location, Profile) {
          return Profile
          .getByUser($route.current.params.userId)
          .then(function(user) {
            if (user.message === 'Not found.') {
              $location.path('/404');
              return;
            }

            return user;
          });
        }
      }
    });
  }

}());
