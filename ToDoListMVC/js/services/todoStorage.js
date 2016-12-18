angular.module('todomvc').factory('todomvcStorage', function() {

  var storage = {
      todos: [
        {
          id: 1,
          title: '요가수행하기',
          completed: false
        },
        {
          id: 2,
          title: '용돈주기',
          completed: false
        }
      ],

      get: function() {
        return storage.todos;
      },

      post: function(todoTitle) {
        var newId = !storage.todos.length ? 1 : storage.todos[storage.todos.length -1].id +1;

        var newTodo = {
          id : newId,
          title: todoTitle,
          completed:false
        };

        storage.todos.push(newTodo);
      },

      delete: function(id) {
        var deleltedTodoIdx = storage.todos.findIndex(function (todo) {
            return todo.id === id;
        });
        if (deleltedTodoIdx === -1) return;
        storage.todos.splice(deleltedTodoIdx, 1);
      },

      deleteCompleted: function() {
        var incompleteTodos = $scope.todos.filter(function (todo) {
          return !todo.completed;
        });
        angular.copy(incompleteTodos, storage.todos);
      }
  };

  return storage;

});
