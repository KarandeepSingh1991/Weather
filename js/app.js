var weatherApp = angular.module('weatherApp', ['ngRoute']);
weatherApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        controller: "weatherController",
        templateUrl: "/views/main.html"
    });

});