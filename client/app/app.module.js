(function () {
  'use strict';

  angular
    .module('baby', [
      /* Shared Modules */
      'ui.router',
      /* Feature areas */
      'baby.landing',
      'baby.signup',
      'baby.login',
      'baby.dashboard',
      'baby.milestone',
      'baby.about',
      'baby.tech'
    ]);
})();

