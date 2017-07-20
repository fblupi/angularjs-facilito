var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.factory("ToDoService", function(localStorageService) {
    var toDoService = {};

    toDoService.key = "angular-todolist";

    toDoService.todos = localStorageService.get(toDoService.key);
    if (!toDoService.todos) toDoService.todos = [];
    
    toDoService.updateLocalStorage = function() {
        localStorageService.set(toDoService.key, toDoService.todos);
    };

    toDoService.add = function(newTodo) {
        toDoService.todos.push(newTodo);
        toDoService.updateLocalStorage();
    };

    toDoService.clean = function() {
        toDoService.todos = [];
        toDoService.updateLocalStorage();
    };

    toDoService.getAll = function() {
        return toDoService.todos;
    };

    toDoService.remove = function(item) {
        toDoService.todos = toDoService.todos.filter(function(todo) {
            return todo !== item;
        });
        toDoService.updateLocalStorage();
        return toDoService.getAll();
    };

    return toDoService;
});

app.controller("ToDoController", function($scope, ToDoService) {
    $scope.todos = ToDoService.getAll();
    $scope.newTodo = {};

    $scope.addTodo = function() {
        ToDoService.add($scope.newTodo);
        $scope.newTodo = {};
    };
    $scope.removeTodo = function(item) {
        $scope.todos = ToDoService.remove(item);
    };
    $scope.cleanTodos = function() {
        ToDoService.clean();
    };
});
