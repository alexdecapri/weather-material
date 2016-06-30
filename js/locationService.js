var app = angular.module('weatherMaterial');

app.service('locationService', function($http, $q) {

  this.getLocation = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://ipinfo.io'
    }).then(function(res) {
      // console.log('res.data: ', res.data);
      deferred.resolve(res.data.city);
    }, function(err) {
      deferred.reject({
        message: 'Unable to get the location!'
      });
    });

    return deferred.promise;
  };


});
