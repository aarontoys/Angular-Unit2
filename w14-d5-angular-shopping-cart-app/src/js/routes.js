app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/page.html',
      controller: 'myController'
    })
    .when('/checkout', {
      templateUrl: 'templates/checkout.html',
      controller: 'checkoutController'
    })
    .otherwise('/');
});