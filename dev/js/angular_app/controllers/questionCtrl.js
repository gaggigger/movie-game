angular.module('app').
controller('QuestionCtrl', function($scope, GameState, movieFactory){

  $scope.submitGuess = function() {
    window.location = '/#/answer';
  };

  var init = function() {

  };

  init();

  console.log('Question gameState: ', $scope.gameState);

});
