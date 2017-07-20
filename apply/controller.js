var app = angular.module("MainModule", []);
app.controller("FirstController", function($scope) {
    $scope.name = "Fran";
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.name = "Codigo Facilito";
        });
    }, 2000);
    document.querySelector("#myButton").addEventListener("click", function() {
        $scope.$apply(function() {
            $scope.name = "You have clicked";
        });
    });
});