app.controller('myController', ['$scope', 'omdbAPI', '$location', function ($scope, omdbAPI, $location) {
  $scope.title = "Angular OMDB API Search";
  $scope.subtitle = "Enter a movie name (by title)"

  $scope.getMovies = function (title) {
    // console.log('controller: ',$scope.search.title);
    $location.path('/'+title);
    omdbAPI.getMovies(title)
      .then(function (results) {
        console.log(results.data.Search)
        $scope.movies = results.data.Search
      });
  }
}]);

app.controller('indexController', ['$scope', function ($scope) {
  $scope.title = "Angular OMDB API Search";
  $scope.subtitle = "Enter a movie name (by title)"
}])