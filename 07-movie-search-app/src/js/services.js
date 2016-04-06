app.service('omdbAPI', ['$http', function ($http) {
  return {
    getMovies: function (title) {
      console.log('services title: ',title);
      return $http({
        url: 'http://www.omdbapi.com/?t='+escape(title)
      })
    }
  }
}])