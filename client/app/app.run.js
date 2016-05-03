(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($state, $rootScope, auth) {
    $state.go('dashboard'); // landing? for logged in users.
  }

  $rootScope.on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if(toState.url === '/milestone' || toState.url === '/dashboard') {
      console.log('broadcasting event');
      $rootScope.$broadcast('rerender');
    } if (toState.authenticate && !auth.isAuthed()) {
      // User isn’t authenticated
      event.preventDefault();
      $state.go('login');
    }
  });
})();