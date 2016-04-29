(function() {
  'use strict';

  angular
  .module('baby.landing')
  .controller('LandingCtrl', LandingCtrl);

function LandingCtrl($state) {

  var vm = this;

  vm.redirectToSignup = function() {
    $state.go('signup');
  };

  vm.redirectToLogin = function() {
    $state.go('login');
  };
}
})();