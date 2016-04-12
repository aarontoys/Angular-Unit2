app.directive('atContenteditable', function () {
  return {
    restrick: 'A',
    templateUrl: '../contenteditable.html',
    transclude: true,
    replace: true,
    link: function (scope, element, attrs) {
      scope.editing = false;
      scope.buttonText = "Edit";
      scope.editContent = function () {
        if (scope.buttonText === "Edit") {
          scope.editing = true;
          scope.buttonText = "Save";
        } else {
          scope.editing = false;
          scope.buttonText = "Edit";
        }
      }
    }
  }
});