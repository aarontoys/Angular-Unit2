app.service('mealDataService', ['$location', '$route', function ($location, $route) {
  var mealCount = 0;
  var meals = [
    // {
    //   id: 1,
    //   price: 36,
    //   taxRate: 7,
    //   tipPercentage:17
    // },
    // {
    //   id: 2,
    //   price: 26,
    //   taxRate: 5,
    //   tipPercentage:15
    // },
    // { id: 3,
    //   price: 16,
    //   taxRate: 19,
    //   tipPercentage:5
    // }
   ];

   var totals = {
    tipTotal: 0,
    mealCount: 0,
    avgTip: 0,
   };

  return {
    getMeals: function () {
      return meals;
    },
    getTotals: function (title) {
      return totals;
    },
    addMeal: function (meal) {
      mealCount++;
      meal.id = mealCount;
      meals.push(meal);
      console.log(meals);
      totals.tipTotal += (meal.price * meal.tipPercentage / 100);
      totals.mealCount++;
      totals.avgTip = totals.tipTotal / totals.mealCount; 
    },
    resetAll: function () {
      mealCount = 0;
      meals = [];
      totals = {};
      $location.path('/');
    }
  }
}])