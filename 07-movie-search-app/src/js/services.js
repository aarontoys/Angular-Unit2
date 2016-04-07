app.service('omdbAPI', ['$http', function ($http) {
  return {
    getMovies: function (title) {
      // console.log('services type: ',type);
      return $http({
        url: 'http://www.omdbapi.com/?s='+escape(title)
      })
    },
    getMovie: function (id) {
      console.log('services id: ',id);
      return $http({
        url: 'http://www.omdbapi.com/?i='+id
      })
    }
  }
}])