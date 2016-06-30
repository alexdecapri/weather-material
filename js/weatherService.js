var app = angular.module('weatherMaterial');

app.service('weatherService', function($http, $q) {

  this.getWeather = function(location) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=standard' + '&appid=c8969cdf2826c2e9a345e56f969520c2';
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: url
    }).then(function(res) {
      console.log('res.data', res.data);
      deferred.resolve(res.data);
    }, function(err) {
      deferred.reject({
        message: 'Unable to retrieve weather!'
      })
    })

    return deferred.promise;
  }

});
