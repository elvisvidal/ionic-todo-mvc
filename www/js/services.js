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

    get: function() {
      var deferred = $q.defer();

      angular.copy(store._getFromLocalStorage(), store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    },

    insert: function (todo) {
      var deferred = $q.defer();

      store.todos.push(todo);

      store._saveToLocalStorage(store.todos);
      deferred.resolve(store.todos);

      return deferred.promise;
    },
  }

  return store;
});
