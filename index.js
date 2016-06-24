var app = angular.module('gardenWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "html/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "html/about.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', ['$scope', function ($scope) {
    $scope.blas = [];
    for(var i = 0; i < 15; i++)
    {
        $scope.blas.push({name: "bla"});
    }
}]);