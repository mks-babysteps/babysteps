(function(){
  'use strict';

  angular
    .module('myDashboard');
    .controller('dashboardController', function($scope, Children){
        //need to create a factory to fetch Children data
        $scope.searchChild = function(){
          console.log('in searchChild')
        } 


    })
})