app.controller('pokemonController', function($scope, $http){
  $scope.myVar = 'Pokemon!';
  $scope.pokemonImg = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif';
  $scope.moveImg = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif';
  
  

  $scope.getPokemon = function () {
    $scope.rndPokemon = Math.floor(Math.random()*720)+1;
    $scope.pokemonImg = 'http://www.kathanshah.com/mywork/wp-content/uploads/2015/09/jOLLXXR.gif'
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'+$scope.rndPokemon
    })
      .then(function (results) {
        console.log(results);
        $scope.pokemonName = results.data.name;
        $scope.pokemonImg = results.data.sprites.front_default;
      })
  }

  $scope.getMove = function () {
    $scope.rndMove = Math.floor(Math.random()*638)+1;
    $scope.moveImg = 'http://www.kathanshah.com/mywork/wp-content/uploads/2015/09/jOLLXXR.gif'
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/move/'+$scope.rndMove
    })
      .then(function (results) {
        console.log(results);
        $scope.pokemonMove = results.data.name;
        $scope.moveImg = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif';
      })
  }

});