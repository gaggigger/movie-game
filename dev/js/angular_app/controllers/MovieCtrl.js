angular.module('app')
.controller('MovieCtrl', function($scope, movieFactory){
  
  $scope.movieResults = {};

  movieFactory.getMovies()
    .then(function(data){

    }, function(data){
      console.error('error getting elements: ', data);
    });

});
