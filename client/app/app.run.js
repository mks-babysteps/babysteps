(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

<<<<<<< HEAD
  function run($state) {
=======

    // Auth, $rootScope
  function run($state) {

    // // set headers & load dashboard if logged in
    // if (Auth.current().token) {
    //   // append authentication information to each HTTP request
    //   $http.defaults.headers.common['username'] = Auth.current().username
    //   $http.defaults.headers.common['token'] = Auth.current().token

      // $state.go('dashboard')
    // }
>>>>>>> dashboard
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
