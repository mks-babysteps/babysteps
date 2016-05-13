(function() {
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl($state, $scope, $uibModal, dashboard, auth,
    filepickerService, $window, $localStorage) {
    // initialize
    var vm = this;

    // variables
    vm.files = JSON.parse($window.localStorage.getItem('files') || '[]');
    vm.pickFile = pickFile;
    //vm.onSuccess = onSuccess;

    // functions
    vm.logout = logout;
    vm.displayUsers = displayUsers;
    vm.removeChild = removeChild;
    vm.milestonePage = milestonePage;
    vm.open = open;
    vm.edit = edit;
    vm.vaccinationsPage = vaccinationsPage;
    vm.pickFile = pickFile;
    vm.sidebarNav = sidebarNav;

    $scope.$on('loggedOut', function() {
      vm.authed = false;
    });

    $scope.$on('loggedIn', function() {
      vm.authed = true;
    });

    function sidebarNav() {

      if($localStorage.username && $localStorage.token) {
        vm.username = auth.current().username;
        return true;
      } else {
        return false;
      }
    }

    function logout() {
      auth.logout();
      $state.go('login');
      vm.authed = false;
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
        .then(function(data) {
          // console.log('displaying user data: ', data)
          sidebarNav();
          var userObj = data.data;
          vm.users = userObj;
          vm.children = userObj[0].children;
          //console.log('vm.users', vm.users[0].imageUrl);
          vm.imageUrl = vm.users[0].imageUrl;
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

    function pickFile() {
      filepickerService.pick({mimetype: 'image/*'}, function(Blob) {
        dashboard.imageUrl(Blob)
        .then(function(data) {
          vm.imageUrl = data.data;
            $state.reload();
        });
      });
    }
  }
})();
