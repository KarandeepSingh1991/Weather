'use strict'
weatherApp.controller('weatherController', ['$scope', 'WeatherService', function($scope, WeatherService) {
    $scope.cityName = "Delhi";
    getWeatheretail($scope.cityName);

    $scope.getWeatherDetails = function() {
        getWeatheretail($scope.cityName);
    };

    function getWeatheretail(cityName) {
        var getWeatherInfo = WeatherService.getWeatherDetails(cityName);
        getWeatherInfo.then(function(getWeatherInfoData) {
            $scope.weatherData = getWeatherInfoData.data.main.temp;
            $scope.cityName = getWeatherInfoData.data.name;
            console.log($scope.weatherData);
            getForcast();
        }, function(data) {
            console.log(data);
        });
    }

    function getForcast() {
        var cityName = $scope.cityName;
        var getForcastInfo = WeatherService.getForcast(cityName);
        getForcastInfo.then(function(getForcastInfo) {
            var date = new Date();
            $scope.forcastList = getForcastInfo.data.list;
            $scope.timestamp = getForcastInfo.data.list.dt;
            $scope.forcastList.map(function(temperature, index) {
                $scope.forcastList[index].day = date.toUTCString().substring(0, 3);
                $scope.forcastList[index].dateMonth = date.getDate() + "/" + date.getMonth();
                $scope.forcastList[index].time = date.getHours() + ":" + date.getMinutes();
            });
            console.log($scope.forcastList);
        }, function(data) {
            console.log(data);
        });
    }
}]);