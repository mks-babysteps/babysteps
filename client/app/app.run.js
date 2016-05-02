(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($state) {
    $state.go('landing');
  }
})();

  // // on state changes, we check for authentication!
  // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
  //   if (toState.url === '/findMatch' || toState.url === '/myMatches') {
  //     console.log('broadcasting event');
  //     $rootScope.$broadcast('rerender');
  //   }

  //   if (toState.authenticate && !Auth.isAuthed()) {
  //     // User isn’t authenticated
  //     event.preventDefault();
  //     $state.go('login');

  //   }
  // });