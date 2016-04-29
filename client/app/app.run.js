(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($state) {
    $state.go('landing');
  }

})();