app.controller('StateController', ['$scope', 'states', '$routeParams', function($scope, states, $routeParams) {
  states.success(function(data) {
    $scope.x = data.states[$routeParams.id];
  });
}]);
