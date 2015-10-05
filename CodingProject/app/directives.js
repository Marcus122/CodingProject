(function () {

    angular.module('app.directives', [])
    .directive('letter', function () {
        var directive = {
            restrict: "EA",
            scope: {
                letter: '=data'
            },
            link: function (scope) {
                scope.href = '#/search/' + scope.letter;
            },
            templateUrl: '/app/directives/letter.html'
        };
        return directive;
    })
    .directive('country', function () {
        var directive = {
            restrict: "EA",
            scope: {
                country: '=data'
            },
            templateUrl: '/app/directives/country.html'
        };
        return directive;
    });

})();