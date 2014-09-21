angular.module('app').
controller('QuestionCtrl', function($scope, GameState, movieFactory){

  $scope.submitGuess = function() {
    window.location = '/movie-game/app/#/answer';
  };

  var init = function() {

  };

  init();

  console.log('Question gameState: ', $scope.gameState);

});
