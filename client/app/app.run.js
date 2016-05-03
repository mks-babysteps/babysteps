(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($state, auth) {
    if (auth.current().token) {
      // Append Authentication Information to Each HTTP Request
      $http.defaults.headers.common['username'] = auth.current().username;
      $http.defaults.headers.common['token'] = auth.current().token;

      // Go To Classrooms Page
      $state.go('dashboard')
    } else {
        // Otherwise Go To Landing Page
        $state.go('landing')
      }
  }

  // $rootScope.on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
  //   if(toState.url === '/milestone' || toState.url === '/dashboard') {
  //     console.log('broadcasting event');
  //     $rootScope.$broadcast('rerender');
  //   } if (toState.authenticate && !auth.isAuthed()) {
  //     // User isn’t authenticated
  //     event.preventDefault();
  //     $state.go('login');
  //   }
  // });
})();

