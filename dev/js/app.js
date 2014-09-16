angular.module('app', ['ngRoute']);

angular.module('app').
config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/views/selCategory.html',
      controller: 'CatCtrl'
    })
    .when('/selNames', {
      templateUrl: 'templates/views/selNames.html',
      controller: 'NameCtrl'
    })
    .when('/question', {
      templateUrl: 'templates/views/question.html',
      controller: 'QuestionCtrl'
    })
    .when('/answer', {
      templateUrl: 'templates/views/answer.html',
      controller: 'AnswerCtrl'
    })
    .otherwise({ redirectTo: '/' });
});
