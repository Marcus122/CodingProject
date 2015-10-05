(function () {

    angular.module('app.controllers', [])
    .controller('AppController', function ($scope, Countries) {
        $scope.title = "Country Finder";
        $scope.loaded = false;
        Countries.init(function () {
            $scope.loaded = true;//once loaded can display data
        });
    })
    .controller('MainController', function ($scope, $location) {
        $scope.search = function () {
            if ($scope.find) {
                $location.path('/find/' + $scope.find);
            }
        }
    })
    .controller('FindController', function ($scope, $routeParams, Countries) {
        $scope.search = $routeParams.search;
        $scope.countries = Countries.search($scope.search)
    })
    .controller('SearchController', function ($scope, $routeParams, Countries) {
        $scope.letter = $routeParams.letter ? $routeParams.letter : 'A';
        $scope.countries = Countries.filter($scope.letter);
        var countries = Countries.getAll();
        $scope.letters = countries.map(function (country) {
            return country.Name.substring(0, 1);
        }).filter(function (letter, index, a) {
            return a.indexOf(letter) === index;
        });
    });

})();