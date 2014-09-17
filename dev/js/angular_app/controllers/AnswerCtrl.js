angular.module('app').
controller('AnswerCtrl', function($scope, GameState, movieFactory){

  var init = function() {
    if($scope.gameState.movie.title == $scope.gameState.guess) {
      var score = $scope.gameState.totalNames - $scope.gameState.numNames + 1;
      console.log('score: ', score);

      $scope.gameState.points += score;
    }

    $scope.gameState.questions++;
  };

  init();

  console.log('Answer gameState: ', $scope.gameState);

});
