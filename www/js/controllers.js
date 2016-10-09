angular.module('starter.controllers', [])

// =================== ALL
.controller('AllCtrl', function($scope, localStorage) {
  var todos = $scope.todos = localStorage.todos;

  $scope.newTask = {title: ''};

  $scope.$on('$ionicView.beforeEnter', function() {
    localStorage.get();
  });

  // -------------- addTask
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

  // -------------- toggleCompleted
  $scope.toggleCompleted = function(task) {
    localStorage.put(task, todos.indexOf(task))
                .then(
                  function success(){},
                  function error() {
                    task.completed = !task.completed
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
