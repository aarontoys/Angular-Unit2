app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/page.html',
      controller: 'myController'
    })
    // .when('/boulder', {
    //   templateUrl: 'templates/boulder.html',
    //   controller: 'weatherController'
    // })
    // .when('/', {
    //   templateUrl: 'templates/main.html'
    // })
    .otherwise('/');
});