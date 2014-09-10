app.controller('MovieCtrl', function($scope, movieFactory){

  $scope.movieResults = {};

  movieFactory.getMovies()
    .then(function(data){
      $scope.movieResults = data;
      console.log(data);
    }, function(data){
      console.error('error getting elements: ', data);
    });

});
