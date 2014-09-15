angular.module('app').
factory('movieFactory', function($http, $q) {

  var movieFactoryMethods = {},
      hostUrl = 'https://api.themoviedb.org/3/',
      method  = 'discover/movie',
      key     = '?api_key=4a3af8cc19e83189d99a0748e2663751',
      query   = '&with_genres=35&year=1993',
      url     = hostUrl + method + key + query;

  movieFactoryMethods.getClue = function(movieId) {
    var deferred = $q.defer();

    method  = 'movie/'+movieId;
    url     = hostUrl + method + key;

    $http.get(url).success(function(data){
      var results = '';

      if(data.tagline.length) {
        results = data.tagline;
      } else {
        results = data.overview.substr(0, 50);
      }

      deferred.resolve(results);
    }).error(function(){
      deferred.reject('There was an error querying the tmdb API');
    });
    return deferred.promise;
  };

  movieFactoryMethods.getCast = function(movieId) {
    var deferred = $q.defer();

    method  = 'movie/'+movieId+'/credits';
    url     = hostUrl + method + key;

    $http.get(url).success(function(data){

      deferred.resolve(data.cast.slice(0, 10));
    }).error(function(){
      deferred.reject('There was an error querying the tmdb API');
    });
    return deferred.promise;
  };

  movieFactoryMethods.getCategories = function() {
    var deferred     = $q.defer(),
        usefulGenres = [];

    method  = 'genre/movie/list';
    url     = hostUrl + method + key;

    $http.get(url).success(function(data){

      for(var i=0;i < data.genres.length;i++) {
        var thisCat = data.genres[i].name.toLowerCase();

        if(MsConsts._catBlacklist.indexOf(thisCat) === -1) {
          usefulGenres.push(data.genres[i]);
        }
      }


      var randGenres = MsUtils.shuffle(usefulGenres).slice(0, 5);
      deferred.resolve(randGenres);
    }).error(function(){
      deferred.reject('There was an error querying the tmdb API');
    });
    return deferred.promise;
  };


  movieFactoryMethods.getMovie = function(cat, year) {
    var deferred = $q.defer();

    method  = 'discover/movie';
    query   = '&with_genres='+cat+'&year='+year+'&include_adult=false&vote_count.gte=5&certification_country=US&certification.lte=R';
    url     = hostUrl + method + key + query;


    $http.get(url).success(function(data){

      randMovie = MsUtils.shuffle(data.results.slice(0, 1));

      deferred.resolve(randMovie[0]);

    }).error(function(){
      deferred.reject('There was an error querying the tmdb API');
    });
    return deferred.promise;
  };

  return movieFactoryMethods;

});
