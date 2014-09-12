angular.module('app').
factory('movieFactory', function($http, $q) {

  var movieFactoryMethods = {},
      hostUrl = 'https://api.themoviedb.org/3/',
      method  = 'discover/movie',
      key     = '?api_key=4a3af8cc19e83189d99a0748e2663751',
      query   = '&with_genres=35&year=1993',
      url     = hostUrl + method + key + query;

  movieFactoryMethods.getMovies = function() {
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
