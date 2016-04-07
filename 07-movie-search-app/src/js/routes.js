app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'myController'
    })
    .when('/:search', {
      templateUrl: 'templates/movies.html',
      controller: 'myController'
    })
    .when('/movie/:id', {
      templateUrl: 'templates/movie.html',
      controller: 'myController'
    })
    .otherwise('/');
});