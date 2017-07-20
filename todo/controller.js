var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.controller("ToDoController", function($scope, localStorageService) {
    $scope.todos = localStorageService.get("angular-todolist");
    if (!$scope.todos) $scope.todos = [];

    $scope.$watchCollection("todos", function() {
        localStorageService.set("angular-todolist", $scope.todos);
    });

    $scope.addTodo = function() {
        $scope.todos.push($scope.newTodo);
        $scope.newTodo = {};
    }
    
    $scope.clean = function() {
        $scope.todos = [];
    }
});
