(function () {
  'use strict';

  angular
    .module('baby.login')
    .controller('LoginCtrl', LoginController);

  function LoginController () {
    // initialization
    var vm = this;

    // variables
    vm.greet = greet;

    // functions
    function greet () {
      console.log('Login!');
    }
  }

})();
