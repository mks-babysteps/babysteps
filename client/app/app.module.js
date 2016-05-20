(function () {
  'use strict';

  angular
    .module('baby', [
      /* shared modules */
      'ui.router',
      'ngStorage',
      'ui.bootstrap',
      'angular-filepicker',
      'firebase',
      'luegg.directives',
      /* feature areas */
      'baby.landing',
      'baby.signup',
      'baby.login',
      'baby.dashboard',
      'baby.milestone',
      'baby.events',
      'baby.about',
      'baby.aboutus',
      'baby.faq',
      'baby.contact',
      'baby.vaccinations',
      'baby.chat'
    ]);
})();

