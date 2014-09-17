angular.module('app').
controller('CatCtrl', function($scope, GameState, movieFactory){

  $scope.getMovie = function() {
    movieFactory.getMovie($scope.gameState.category.id, $scope.gameState.year)
      .then(function(data){
        $scope.gameState.movie = data;
        window.location = '/movie-game/app/#/selNames';
      }, function(data){
        console.error('error getting movie: ', data);
      });
  };

  $scope.getYears = function() {
    if($scope.gameState.years.length === 0) {

      var thisYear = new Date().getFullYear();
      var tempYears = [];

      // Seed Years
      for(var i = 1990; i <= thisYear; i++) {
        tempYears.push(i);
      }

      var randYears= MsUtils.shuffle(tempYears).slice(0, 5);
      $scope.gameState.years = randYears.sort();
    }
  };

  var init = function() {
    GameState.resetState();

    movieFactory.getCategories()
      .then(function(data){
        $scope.gameState.categories = data;
      }, function(data){
        console.error('error getting elements: ', data);
      });
  };

  init();

  console.log('Category gameState: ', $scope.gameState);

});
