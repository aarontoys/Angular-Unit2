app.controller('weatherController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  // console.log($location.url().substring(1));
  $scope.city = $location.url().substring(1);

  //shorthand for $http below:

  // $http.get('https://google.com')
  //   .then(function (results) {
  //     console.log(results);
  //   });

  $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&APPID=56bd8fe9558b62cf4f615cfd8e79cfec&units=imperial'
  })
    .then(function (results) {
      $scope.temp = results.data.main.temp;
    })
}]);


