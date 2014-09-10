angular.module('app')
.factory('movieFactory', function($http, $q) {

  var movieFactoryMethods = {},
      hostUrl = 'https://api.themoviedb.org/3/',
      method  = 'movie/550',
      query   = '?api_key=4a3af8cc19e83189d99a0748e2663751',
      url     = hostUrl + method + query;

  guideFactoryMethods.getMovies = function() {
    var deferred = $q.defer();

    $http.get(url).success(function(data){
      deferred.resolve(data);
    }).error(function(){
      deferred.reject('There was an error querying the tmdb API');
    });
    return deferred.promise;
  };

  return movieFactoryMethods;

});
