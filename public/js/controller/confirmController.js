'use strict';

module.exports = function($scope,$rootScope, $http,$location) {
  $scope.bking=$rootScope.bookingconfirm;
  console.log($scope.bking);


  // console.log($rootScope.bookingconfirm);
  $scope.confirm = function () {
    alert("Booked Successfully");
  };
// $scope.cancel=function()
// {
//   $rootScope.cancelconfirm=$scope.bking;
//   // console.log($rootScope.bookingconfirm);
//   $location.path('/cancellation');
//   $route.reload();
//
//
// };
  };
