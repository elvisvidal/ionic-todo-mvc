angular.module('todomvc.controllers', [])

// =================== ALL
.controller('AllCtrl', function($scope, localStorage) {

  var todos = $scope.todos = localStorage.todos;
  var status = $scope.status = 'all';
  $scope.statusFilter = {};
  $scope.newTask = {title: ''};

  // -------------- filter
  $scope.checkStatus = function (status) {
    return $scope.status == status;
  };
  $scope.changeStatus = function (status) {
    $scope.status = status;
    switch(status) {
      case 'all':
        $scope.statusFilter = {};
        break;
      case 'active':
        $scope.statusFilter = {completed: false};
        break;
      case 'completed':
        $scope.statusFilter = {completed: true};
        break;
    }
  };

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

  // -------------- removeTask
  $scope.removeTask = function(task) {
    localStorage.delete(task);
  };

});
