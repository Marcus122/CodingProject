(function () {

    var App = angular.module('app', ['ngResource', 'ngRoute', 'app.controllers', 'app.models', 'app.directives']);

    App.config(function ($routeProvider) {
        var views = '/app/views/';
        $routeProvider.
            when('/', {
                templateUrl: views + 'main.html',
                controller: 'MainController'
            }).
            when('/search', {
                templateUrl: views + 'search.html',
                controller: 'SearchController'
            }).
            when('/search/:letter', {
                templateUrl: views + 'search.html',
                controller: 'SearchController'
            }).
            when('/find/:search', {
                templateUrl: views + 'find.html',
                controller: 'FindController'
            }).otherwise({
                redirectTo: "/"
            });
    });

})();