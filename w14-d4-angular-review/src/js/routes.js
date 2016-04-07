app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/details', {
      templateUrl: 'templates/details.html',
      controller: 'detailsController'
    })
    .when('/charges', {
      templateUrl: 'templates/charges.html',
      controller: 'chargesController'
    })
    .when('/earnings', {
      templateUrl: 'templates/earnings.html',
      controller: 'earningsController'
    })
    .otherwise('/details');
});