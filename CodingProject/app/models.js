(function () {

    angular.module('app.models', [])
    .factory('Country', function ($resource) {
        return $resource("/api/country/:code", { code: '@ISO' });
    })
    .factory('Countries', function (Country) {
        var countries;
        function getAll() {
            return countries;
        }
        function populateCountries(cb) {
            if (countries) {
                return cb(countries);
            }
            //emtpy query to get all
            countries = Country.query(cb);
        }
        function clear() {
            countries = null;
        }
        function filter(letter, cb) {
            return countries.filter(
                function (country) {
                    return country.Name.substring(0, 1) === letter;
                });
        }
        function search(term, cb) {
            return countries.filter(function (country) {
                return country.Name.indexOf(term) > -1;
            });
        }
        function init(cb) {
            populateCountries(cb);
        }
        return {
            clear: clear,
            getAll: getAll,
            filter: filter,
            search: search,
            init: init //user the init method so all methods don't need callbacks
        }
    });

})();