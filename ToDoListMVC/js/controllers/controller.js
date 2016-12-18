angular.module('todomvc').controller('TodomvcCtrl', function($scope, todomvcStorage) {

  $scope.todos = todomvcStorage.get();

  $scope.remove = function(id) {
      if(!id) return;

      // 배열에서 제거할 인덱스 검색
      var deletedTodoIdx = $scope.todos.findIndex(function(todo) {
        return todo.id === id;
      });

      if(deletedTodoIdx === -1) return;

      // 배열에서 제거
      $scope.todos.splice(deletedTodoIdx, 1);
  };

  $scope.addTodo = function(todoTitle) {
    todoTitle = todoTitle.trim();
    if(!todoTitle) return;
    todomvcStorage.post(todoTitle);
  };

  $scope.remove = function(id) {
    if(!id) return;
    todomvcStorage.delete(id);
  };


  $scope.$watch('status', function() {
    if($scope.status === 'completed') {
      $scope.statusFilter = {completed: true};
    } else if ($scope.status === 'active') {
      $scope.statusFilter = {completed: false};
    } else {
      $scope.statusFilter = {};
    }
  });

  $scope.clearCompleted = function() {
    todomvcStorage.deleteCompleted();
  };

});
