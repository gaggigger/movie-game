angular.module('app').
controller('CatCtrl', function($scope, GameState, movieFactory){

  $scope.gameState = GameState.state();
  $scope.questionReset = GameState.resetObj();

  $scope.getMovie = function() {
    movieFactory.getMovie($scope.gameState.category.id, $scope.gameState.year)
      .then(function(data){
        $scope.gameState.movie = data;
        window.location = '/#/selNames';
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

    console.log('begin new question');

    for(var property in $scope.questionReset) {
      $scope.gameState.property = $scope.questionReset.property;
    }

    movieFactory.getCategories()
      .then(function(data){
        $scope.gameState.categories = data;
      }, function(data){
        console.error('error getting elements: ', data);
      });
  };
  
  init();

});
