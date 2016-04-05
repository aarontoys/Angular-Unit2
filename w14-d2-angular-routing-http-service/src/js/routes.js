app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/denver', {
      templateUrl: 'templates/denver.html',
      controller: 'weatherController'
    })
    .when('/boulder', {
      templateUrl: 'templates/boulder.html',
      controller: 'weatherController'
    })
    .when('/', {
      templateUrl: 'templates/main.html'
    })
    .otherwise('/');
});