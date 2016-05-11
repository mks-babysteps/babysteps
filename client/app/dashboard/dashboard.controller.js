(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($state, $scope, $uibModal, dashboard, auth) {
      // initialize
      var vm = this;

      // variables
      vm.username = auth.current().username;

      // functions
      vm.logout = logout;
      vm.displayChildren = displayChildren;
      vm.displayUsers = displayUsers;
      vm.removeChild = removeChild;
      vm.milestonePage = milestonePage;
      vm.open = open;
      vm.edit = edit;
      vm.vaccinationsPage = vaccinationsPage;
      
      $scope.$on('loggedOut', function() {
        vm.authed = false;
      });

      $scope.$on('loggedIn', function() {
        vm.authed = true;
      });

      function logout() {
        auth.logout();
        $state.go('login');
        vm.authed = false;
      }

      function displayChildren() {
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data[0];
            vm.children = userObj.children;
          });
      }

      function edit(firstName, lastName) {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/editChild/editChild.html',
          controller: 'EditChildCtrl as myChild',
          resolve: {
            child: function() {
              return [firstName, lastName];
            }
          }
        });
      }

      function open() {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/child/child.html',
          controller: 'ChildCtrl as child'
        });
      }

      function displayUsers() {
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data;
            vm.users = userObj;
          });
      }

      function removeChild(childFirstName) {
        dashboard.removeThisChild(childFirstName)
          .then(function(){
            $state.reload('dashboard');
          });
      }

      function milestonePage(condition) {
        // dashboard.goMilestone(condition);
        $state.go('milestone', {condition: condition});
      }

      function vaccinationsPage(condition) {
        console.log('condition', condition);
        dashboard.goVaccinations(condition);
      }
    }
})();
