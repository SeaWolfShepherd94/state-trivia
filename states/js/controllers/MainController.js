app.controller('MainController', ['$scope', 'states', function($scope, states) {
  states.success(function(data) {
    $scope.states = data.states;
  });
}]);
