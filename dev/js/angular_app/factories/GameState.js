angular.module('app').
factory('GameState', function() {

  var gameState = {
    category  : {},
    movie     : {},
    cast      : [],
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

  var questionReset = {
    category  : {},
    movie     : {},
    cast      : [],
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
    resetObj: function() {
      return questionReset;
    }
  };

});
