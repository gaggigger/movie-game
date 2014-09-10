angular.module('app', ['ngRoute']);

angular.module('app').
config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'MovieCtrl'
    })
    .otherwise({ redirectTo: '/' });
});
