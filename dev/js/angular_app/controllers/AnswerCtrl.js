angular.module('app').
controller('AnswerCtrl', function($scope, GameState, movieFactory){

  $scope.gameState = GameState.state();

  var init = function() {
    if($scope.gameState.movie.title == $scope.gameState.guess) {
      $scope.gameState.win = true;
      $scope.gameState.points++;
    }
  };

  init();


});