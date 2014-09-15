angular.module('app', ['ngRoute']);

angular.module('app').
config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/selCategory.html',
      controller: 'CatCtrl'
    })
    .when('/selNames', {
      templateUrl: 'templates/selNames.html',
      controller: 'NameCtrl'
    })
    .when('/question', {
      templateUrl: 'templates/question.html',
      controller: 'QuestionCtrl'
    })
    .when('/answer', {
      templateUrl: 'templates/answer.html',
      controller: 'AnswerCtrl'
    })
    .otherwise({ redirectTo: '/' });
});
