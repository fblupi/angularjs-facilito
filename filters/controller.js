var app = angular.module("Filters", []);

app.filter("removeHTML", function() {
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, "");
    }
});

app.controller("FiltersController", function($scope){
    $scope.myHTML = "<p>Hello world</p>";
    $scope.myJSON = {};
    $scope.myJSON.title = "Hello"
    $scope.myJSON.body = "Hello world";
    $scope.cost = 2;
});