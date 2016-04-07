app.controller('detailsController', ['$scope', 'mealDataService', '$location', '$timeout', '$route',
  function ($scope, mealDataService, $location, $timeout, $route) {
    console.log('test controller');
    
    $scope.meal = {};
    // $scope.meal.price = 36;
    // $scope.meal.taxRate = 7;
    // $scope.meal.tipPercentage = 17;

    $scope.count = 0;

    $scope.addMyMeal = function () {
      // $scope.count++;
      // $scope.meal.id = $scope.count;  
      mealDataService.addMeal(this.meal);
      $scope.meal = {};
    }
}]);

app.controller('chargesController', ['$scope', 'mealDataService', '$location', '$timeout', '$route',
  function ($scope, mealDataService, $location, $timeout, $route) {

  $scope.meals = mealDataService.getMeals();

  console.log($scope.meals);

  $scope.showMeal = 1; 

  $scope.cycleMeals = function (next) {
    if (next === 'next' && ($scope.meals.length > $scope.showMeal)) {
      $scope.showMeal++;
    } 
    else if (next === 'prev' && $scope.showMeal > 1) {
      $scope.showMeal--;
    } else {
      $scope.showMeal = 1;
    }
  }
}]);

app.controller('earningsController', ['$scope', 'mealDataService', '$location', '$timeout', '$route',
  function ($scope, mealDataService, $location, $timeout, $route) {

  $scope.totals = mealDataService.getTotals();
    // body...
  
}]);

app.controller('resetController', ['$scope', 'mealDataService', '$location', '$timeout', '$route',
  function ($scope, mealDataService, $location, $timeout, $route) {

  $scope.reset = function () {
    mealDataService.resetAll();
  } 
    
  
}]);