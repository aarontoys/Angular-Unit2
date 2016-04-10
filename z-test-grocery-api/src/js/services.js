

app.service('test', ['$location', '$http', '$q', function ($location, $http, $q) {
  var request = require('request');

  var endpoints = [];
  var validURLs = [];
  var invalidURLs = [];
  var testEndpoint = [77823];

  return {
    generateEndpointArr: function () {
      for (var i = 1; i <= 77823; i++) {
        endpoints.push(i);
      }

      console.log(endpoints.length);

    },
    checkValidURLs: function () {

      // testEndpoint.forEach(function (el) {
      //    $http({
      //       method: 'GET',
      //       url: 'http://products.peapod.com/'+el+'.html'
      //     })
      //       .then(function (result) {
      //         $validURLs.push(result);
      //       })
      //       .catch(function (result) {
      //         invalidURLs.push(result);
      //       })
      // });
      //         console.log('valid: ',validURLs)
      //         console.log('invalid: ',invalidURLs)
        request('http://www.omdbapi.com/?s=gun', function (error, response, body) {
           if (!error && response.statusCode == 200) {
             console.log(body) // Show the HTML for the Google homepage. 
           }
        });
     
    }
  }
  

}]);
