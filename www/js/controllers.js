angular.module('starter.controllers', [])

// =================== ALL
.controller('AllCtrl', function($scope, localStorage) {
  var todos = $scope.todos = localStorage.todos;

  $scope.newTask = {title: ''};

  $scope.addTask = function() {
    var newTask = {
      title: $scope.newTask.title.trim(),
      completed: false
    };

    if (!newTask.title) {
      return;
    }

    $scope.saving = true;
    localStorage.insert(newTask)
                .then(function success() {
                  $scope.newTask = {title: ''};
                })
                .finally(function () {
                  $scope.saving = false;
                });
  };
})

// =================== ACTIVE
.controller('ActiveCtrl', function($scope) {})

// =================== COMPLETED
.controller('CompletedCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
