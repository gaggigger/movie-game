angular.module('app').
controller('NameCtrl', function($scope, GameState, movieFactory){

  $scope.castRange = [];

  $scope.goToQuestion = function() {

    // Preserve length of cast for scoring
    $scope.gameState.totalNames = $scope.gameState.cast.length;
    $scope.gameState.cast = $scope.gameState.cast.slice(0, $scope.gameState.numNames);

    console.log('numNames before redirect', $scope.gameState.numNames);

    window.location = '/#/question';
  };

  // Handle case where there is no cast
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
        $scope.gameState.cast = data.reverse();
        $scope.castRange = MsUtils.range(0, data.length);
      }, function(data){
        console.error('error getting cast: ', data);
      });

  };

  init();

  console.log('Name gameState: ', $scope.gameState);

});
