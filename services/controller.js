var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.service("ToDoService", function(localStorageService) {
    this.key = "angular-todolist";

    this.todos = localStorageService.get(this.key);
    if (!this.todos) this.todos = [];
    
    this.updateLocalStorage = function() {
        localStorageService.set(this.key, this.todos);
    };

    this.add = function(newTodo) {
        this.todos.push(newTodo);
        this.updateLocalStorage();
    };

    this.clean = function() {
        this.todos = [];
        this.updateLocalStorage();
    };

    this.getAll = function() {
        return this.todos;
    };

    this.remove = function(item) {
        this.todos = this.todos.filter(function(todo) {
            return todo !== item;
        });
        this.updateLocalStorage();
        return this.getAll();
    };
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
