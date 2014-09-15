angular.module('app').
controller('QuestionCtrl', function($scope, GameState, movieFactory){

  $scope.gameState = GameState.state();

  $scope.submitGuess = function() {
    window.location = '/movie-game/app/#/answer';
  };

  var init = function() {

  };

  init();


});
