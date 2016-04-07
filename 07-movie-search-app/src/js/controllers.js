app.controller('myController', ['$scope', 'omdbAPI', '$location', function ($scope, omdbAPI, $location) {
  $scope.title = "Angular OMDB API Search";
  $scope.subtitle = "Enter a movie name (by title)"

  $scope.getMovies = function (title) {
    // console.log('controller: ',$scope.search.title);
    $location.path('/'+title);
    omdbAPI.getMovies(title)
      .then(function (results) {
        console.log(results.data)
        $scope.movies = results.data
        console.log($scope.movies);
      });
  }

  $scope.getMovie = function (id) {
    $location.path('/movie/'+id);
    omdbAPI.getMovie(id)
      .then(function (result) {
        console.log(result.data);
        $scope.singleMovie = result.data;
        console.log($scope.singleMovie.Title);
      });

  }
}]);
