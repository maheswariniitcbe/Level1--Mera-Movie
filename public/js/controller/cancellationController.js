'use strict';

module.exports = function($scope,$rootScope, $http) {
  $scope.cancell = 'cancellation';
  $scope.bking="";
  $scope.cancellationId="";
$scope.getcancel=function(){
  $http.delete('/bk/bk/'+$scope.cancellationId).success(function(response){
  console.log(response);
  $scope.bking=response;
  alert("cancelled Successfully");
});
};


};
