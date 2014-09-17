angular.module('app').
factory('GameState', function() {

  var gameState = {
    category  : {},
    movie     : {},
    cast      : [],
    totalNames: 0,
    clue      : '',
    year      : null,
    points    : 0,
    questions : 0,
    numNames  : null,
    categories: [],
    years     : [],
    page      : 'selCategory',
    guess     : '',
    win       : false
  };

  // Use this to reset the gameState
  var questionReset = {
    category  : {},
    movie     : {},
    cast      : [],
    totalNames: 0,
    clue      : '',
    year      : null,
    numNames  : null,
    categories: [],
    years     : [],
    page      : 'selCategory',
    guess     : '',
    win       : false
  };

  return {
    state: function() {
      return gameState;
    },
    resetState: function() {
      for(var property in questionReset) {
        gameState[property] = questionReset[property];
      }
      return gameState;
    }
  };

});
