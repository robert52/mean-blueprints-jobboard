(function() {
  'use strict';

  angular
  .module('profile')
  .factory('Profile', Profile)

  Profile.$injecet = ['$http', 'config'];

  function Profile($http, config) {
    var serviceBase = config.url + '/api/users';
    var factory = {
      createBlock: createProfileBlock,
      updateBlock: updateProfileBlock,
      getByUser: getByUser
    };

    function createProfileBlock(userId, block) {
      return $http
      .post(serviceBase + '/' + userId + '/profile/blocks', block)
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function updateProfileBlock(userId, block) {
      if (!block._id) {
        return createProfileBlock(userId, block);
      }

      return $http
      .put(serviceBase + '/' + userId + '/profile/blocks/' + block._id, block)
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    function getByUser(userId) {
      return $http
      .get(serviceBase + '/' + userId + '/profile')
      .then(function(result) {
        return result.data;
      })
      .catch(function(err) {
        err.data.error = err.data.error || true;
        return err.data;
      });
    }

    return factory;
  }

}());
