app.controller('myController', ['$scope', 'omdbAPI', '$location', '$timeout', '$route',
  function ($scope, omdbAPI, $location, $timeout, $route) {
  $scope.title = "Angular OMDB API Search";
  $scope.subtitle = "Enter a movie name (by title)"

  // $scope.singleMovie = omdbAPI.getSelected() || 'No Movie Selected';

  $scope.getMovies = function (title) {
    // console.log('controller: ',$scope.search.title);
    $location.path('/'+title);
    $timeout(function () {
      omdbAPI.getMovies(title)
      .then(function (results) {
        console.log(results.data)
        $scope.movies = results.data
        console.log($scope.movies);
      })}, 1000);
  }

  $scope.showMovieView = function (id) {
    $location.path('/movie/'+id);
  }
}]);

app.controller('movieController', ['$scope', 'omdbAPI', '$location', '$timeout', '$route',
  function ($scope, omdbAPI, $location, $timeout, $route) {

  // $scope.singleMoive = omdbAPI.getSelected();

  // $scope.getMovie = function () {
  //   console.log('current route params: ',$route.current.params);
  //   omdbAPI.getMovie(id)
  //     .then(function (result) {
  //       console.log(result.data);
  //       $scope.singleMovie = result.data;
  //       console.log('singleMovie', $scope.singleMovie);
  //       console.log($scope.singleMovie.Title);
  //     });
  // }
    // $scope.getMovie = function () {
    // console.log('current route params: ',$route.current.params);
    omdbAPI.getMovie($route.current.params.id)
      .then(function (result) {
        console.log(result.data);
        $scope.singleMovie = result.data;
        console.log('singleMovie', $scope.singleMovie);
        console.log($scope.singleMovie.Title);
      });
  
}]);
