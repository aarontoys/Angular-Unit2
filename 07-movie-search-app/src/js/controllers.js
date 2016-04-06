app.controller('myController', ['$scope', 'omdbAPI', function($scope, omdbAPI) {
  $scope.title = "Angular OMDB API Search";
  $scope.subtitle = "Enter a movie name (by title)"

  $scope.getMovies = function (title) {
    // console.log('controller: ',$scope.search.title);
    omdbAPI.getMovies(title)
      .then(function (results) {
        console.log(results)
        // $scope.results.data
      })
  }
}]);