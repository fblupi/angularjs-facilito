var app = angular.module("MyFirstApp", [])

app.controller("FirstController", function($scope){
    $scope.name = "Fran";
    $scope.newComment = {};
    $scope.comments = [
        {
            comment: "Good tutorial",
            username: "codigofacilito"
        },
        {
            comment: "Very bad tutorial",
            username: "other_user"
        }
    ];
    $scope.addComment = function() {
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};
    }
});