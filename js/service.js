weatherApp.service('WeatherService', ['$http', function($http) {
    var serviceBase = 'http://api.openweathermap.org';
    var apiKey = 'b9feb11dd0284ae1a415f94d50777169';

    this.getWeatherDetails = function(cityName) {
        return $http.get(serviceBase + '/data/2.5/weather', {
            params: {
                q: cityName,
                apiKey: apiKey,
                units: 'metric'
            }
        });
    };

    this.getForcast = function(cityName) {
        return $http.get(serviceBase + '/data/2.5/forecast', {
            params: {
                q: cityName,
                apiKey: apiKey,
                units: 'metric'
            }
        });
    };
}]);