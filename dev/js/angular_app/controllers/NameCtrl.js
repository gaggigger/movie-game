angular.module('app').
controller('NameCtrl', function($scope, GameState, movieFactory){

  $scope.gameState = GameState.state();

  $scope.range = function(start, end) {
      var result = [];
      for (var i = start; i <= end; i++) {
          result.push(i);
      }
      return result;
  };

  $scope.goToQuestion = function() {

    $scope.gameState.cast = $scope.gameState.cast.slice(0, $scope.gameState.numNames);

    window.location = '/#/question';
  };

  $scope.noCastConfirm = function() {

    $scope.gameState.numNames = 0;

    window.location = '/#/question';
  };


  var init = function() {

    movieFactory.getClue($scope.gameState.movie.id)
      .then(function(data){
        $scope.gameState.clue = data;
      }, function(data){
        console.error('error getting clue: ', data);
      });

    movieFactory.getCast($scope.gameState.movie.id)
      .then(function(data){
        console.log('getCast: ', data);
        $scope.gameState.cast = data.reverse();
      }, function(data){
        console.error('error getting cast: ', data);
      });

  };
  
  init();

});