// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {

  $scope.greeting = "Hello World";
});

app.directive('appLogin', function () {
  return {
    restrict: 'E',
    templateUrl: '../login.html',
    transclude: true
  }
})

app.directive('newDirective', function () {
  return {
    restrict: 'E',
    link: function ($scope, element, attrs) {
      element.on('click', function () {
        element.html('You clicked me');
      });
      element.on('click', function () {
        element.css('background-color', 'yellow')
      });
    }
  }
})