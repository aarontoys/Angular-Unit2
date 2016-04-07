app.service('omdbAPI', ['$http', '$route', function ($http, $route) {
  var selectedMovie = '';

  return {
    getSelected: function () {
      console.log('services route: ',$route.current.params);
      return $route.current.params;
    },
    getMovies: function (title) {
      // console.log('services type: ',type);
      return $http({
        url: 'http://www.omdbapi.com/?s='+escape(title)
      })
    },
    getMovie: function (id) {
      // console.log('services id: ',id);
      return $http({
        url: 'http://www.omdbapi.com/?i='+id
      })
    }
  }
}])