angular.module('app').
controller('MovieGameCtrl', function($scope, GameState, movieFactory){

  $scope.gameState = GameState.state();

});
