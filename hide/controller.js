var app = angular.module("MyFirstApp", [])

app.controller("FirstController", function($scope, $http) {
    $scope.posts = [];
    $scope.loading = true;
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.posts = response.data;
        $scope.loading = false;
    }, function(error) {
        console.log(error);
        $scope.loading = false;
    });
});