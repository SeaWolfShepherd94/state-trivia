var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/main.html' 
    })
    .when('/states/:id', { 
      controller: 'StateController', 
      templateUrl: 'views/state.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
