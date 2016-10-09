angular.module('starter.services', [])

.factory('localStorage', function($q) {  
  var STORAGE_ID = 'todos-angularjs';

  var store = {
    todos: [],

    _getFromLocalStorage: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    _saveToLocalStorage: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    },

    delete: function (task) {
      var deferred = $q.defer();

      store.todos.splice(store.todos.indexOf(task), 1);

      store._saveToLocalStorage(store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    },

    get: function() {
      var deferred = $q.defer();

      angular.copy(store._getFromLocalStorage(), store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    },

    insert: function (task) {
      var deferred = $q.defer();

      store.todos.push(task);

      store._saveToLocalStorage(store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    },

    put: function (task, index) {
      var deferred = $q.defer();

      store.todos[index] = task;

      store._saveToLocalStorage(store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    }
  }

  return store;
});
