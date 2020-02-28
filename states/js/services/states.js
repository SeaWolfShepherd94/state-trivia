app.factory('states', ['$http', function($http) {
  return $http.get('myjson.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

