var app = angular.module("MyFirstApp", [])

app.controller("FirstController", ["$scope", function(m) {
    m.name = "Fran";
    m.newComment = {};
    m.comments = [
        {
            comment: "Good tutorial",
            username: "codigofacilito"
        },
        {
            comment: "Very bad tutorial",
            username: "other_user"
        }
    ];
    m.addComment = function() {
        m.comments.push(m.newComment);
        m.newComment = {};
    }
}]);