(function() {
  'use strict';

  angular
  .module('job')
  .controller('JobsController', JobsController);

  JobsController.$inject = ['Job'];

  function JobsController(Job) {
    var vm = this;
    console.log('jobs controller');
    // TODO: implement everything
  }

}());
