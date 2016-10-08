angular.module('starter.controllers', [])

// =================== ALL
.controller('AllCtrl', function($scope) {
  $scope.newTask = {
    title:'OLA MUNDO'
  };

  $scope.addTask = function() {
    console.log($scope.newTask);
  };
})

// =================== ACTIVE
.controller('ActiveCtrl', function($scope, Chats) {})

// =================== COMPLETED
.controller('CompletedCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
