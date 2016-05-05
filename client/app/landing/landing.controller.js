(function() {
  'use strict';

angular
  .module('baby.landing')
  .controller('LandingCtrl', LandingCtrl);

  function LandingCtrl($state) {
    // initialize
    var vm = this;

    // functions
    vm.redirectToSignup = redirectToSignup;
    vm.redirectToLogin = redirectToLogin;

    function redirectToSignup() {
      $state.go('signup');
    }

    function redirectToLogin() {
      $state.go('login');
    }
  }

})();