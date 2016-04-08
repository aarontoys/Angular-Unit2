// app.controller('myController', ['$scope', 'groceryAPIService', function ($scope, groceryAPIService) {

//   $scope.greeting = "Hello World!";

//   groceryAPIService.generateEndpointArr();

// }]);

app.controller('myController', ['$scope', 'test', function ($scope, test) {

  console.log('check controller');

  $scope.greeting = "Hello World!";

  test.generateEndpointArr();
  test.checkValidURLs();
  

}]);