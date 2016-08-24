'use strict';

module.exports = function($scope,$route,$rootScope, $http,$location) {
  //  $scope.bking=""


// function myFunction() {
//     alert("Ur Successfully Booked");
// }
  // var count=0;
  // var sn="";
  // var seats=[];
  //
  // document.getElementById("seatno").innerHTML=seats;
  // document.getElementById("subtotal").innerHTML=subtotal;
  // document.getElementById("seatcount").innerHTML=count;

      // $scope.ticketcnt;
      //   $scope.total=0;
      //     $scope.count=50;
      //     $scope.ID;
    // $scope.pay=  function()
    // //   {
    //     $("bk-pay").click(function()
    //     {

  //       document.getElementById("nooftickets").innerHTML=  ticketcnt;
  //         if(count>ticketcnt)
  //         {
  //         ID = function () {
  //     return '_' + Math.random().toString(36).substr(2, 9);  };
  //   count=count-ticketcnt;
  //           total=ticketcnt*200;
  //
  //             ticketcnt=document.getElementById("nooftickets").innerHTML;
  // document.getElementById("bk-id").innerHTML=ID;
  //              document.getElementById("amt").innerHTML=total;
  //             alert("Ticket Booked Successfully");
  //         }
  //         else
  //           {
  //               alert("No tickets");
  //           }
        //   })
        // };


  (function(){

      var userSelector = function($http){

        var getUsers = function(username){
              return $http.get('/city/city')
                          .then(function(response){
                             return response.data;
                          });
        };

        return {
            get: getUsers
        };

      };

      var module = angular.module('movieApp');
      module.factory('userSelector', userSelector);

  }());
   // Dropdownlist showtime

  (function(){

      var movietime = function($http){

        var getUsers = function(username){
              return $http.get('/showtiming/showtiming')
                          .then(function(response){
                             return response.data;
                          });
        };

        return {
            get: getUsers
        };

      };

      var module = angular.module('movieApp');
      module.factory('movietime', movietime);

  }());
  //dropdownlist threater
  (function(){

      var threaterloc = function($http){

        var getUsers = function(username){
              return $http.get('/threater/threater')
                          .then(function(response){
                             return response.data;
                          });
        };

        return {
            get: getUsers
        };

      };

      var module = angular.module('movieApp');
      module.factory('threaterloc', threaterloc);

  }());
  var movieObj={};
  $scope.getData = function(){
    console.log('Hi Welcome');
     $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.Title+'&y='+$scope.movieObj.Year+'&plot=short&r=json').success(function (response){
          console.log(response);
   for(var key in response)
   {
    if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
        {
        movieObj[key] = response[key];
        }

      console.log(movieObj);

        }
             refresh5();
    });
  }

  var refresh5 = function () {
                              $http.get('/movie/movie').success(function (response) {
                                  console.log('READ IS SUCCESSFUL');
                                  $scope.movieObj = response;
                                  $scope.moviess = "";
                              });
                          };

                    refresh5();

                      (function(){

                          var getMovieInfo = function($http){

                            var getshowinfo = function(showinfo){
                                  return $http.get('/movieinfo/movieinfo')
                                              .then(function(response){
                                                 return response.data;
                                              });
                            };

                            return {
                                get: getshowinfo
                            };

                          };

                          var module = angular.module('movieApp');
                          module.factory('getMovieInfo', getMovieInfo);

                      }());



                          var refreshnow = function () {
                                                  $http.get('/movieinfo/movieinfo').success(function (response) {
                                                      console.log('READ IS SUCCESSFUL');
                                                      $scope.nowlist = response;
                                                      $scope.now = "";
                                                  });
                                              };
                                              refreshnow();
                          var refresh = function () {
                                                      $http.get('/city/city').success(function (response) {
                                                          console.log('READ IS SUCCESSFUL');
                                                          $scope.contactlist = response;
                                                          $scope.contact = "";
                  });
                };
  refresh();
                                                          var threater_refresh = function () {
                                                              $http.get('/threater/threater').success(function (response) {
                                                                  console.log('READ IS SUCCESSFUL');
                                                                  $scope.Threaterlist = response;
                                                                  $scope.tobj = "";
                                                              });
                                                          };

                                                          threater_refresh();
                                                  var refreshshow = function () {
                                                      $http.get('/showtiming/showtiming').success(function (response) {
                                                          console.log('READ IS SUCCESSFUL');
                                                          $scope.Timelist = response;
                                                          $scope.timeobj = "";
                                                      });
                                                  };
                                                  refreshshow();

                                                  var refreshbk = function () {
                                                        $http.get('/bk/bk').success(function (response) {
                                                            console.log('READ IS SUCCESSFUL');
                                                            $scope.bklist = response;
                                                            $scope.bking = "";
                                                        });
                                                    };

                                                    refreshbk();
//
//
//  // console.log($rootScope.name);
// (function(){
//
//     var loc = function($http){
//
//       var getUsers = function(username){
//             return $http.get('/city/city')
//                         .then(function(response){
//                            return response.data;
//                         });
//       };
//
//       return {
//           get: getUsers
//       };
//
//     };
//
//     var module = angular.module('movieApp');
//     module.factory('loc',loc);
//
// }());
//  // Dropdownlist showtime
//
// (function(){
//
//     var stime = function($http){
//
//       var getUsers = function(username){
//             return $http.get('/showtiming/showtiming')
//                         .then(function(response){
//                            return response.data;
//                         });
//       };
//
//       return {
//           get: getUsers
//       };
//
//     };
//
//     var module = angular.module('movieApp');
//     module.factory('stime',stime);
//
// }());
// //dropdownlist threater
// (function(){
//
//     var tname = function($http){
//
//       var getUsers = function(username){
//             return $http.get('/threater/threater')
//                         .then(function(response){
//                            return response.data;
//                         });
//       };
//
//       return {
//           get: getUsers
//       };
//
//     };
//
//     var module = angular.module('movieApp');
//     module.factory('tname', tname);
//
// }());
//
//
// (function(){
//
//     var mname = function($http){
//
//       var getshowinfo = function(showinfo){
//             return $http.get('/movieinfo/movieinfo')
//                         .then(function(response){
//                            return response.data;
//                         });
//       };
//
//       return {
//           get: getshowinfo
//       };
//
//     };
//
//     var module = angular.module('movieApp');
//     module.factory('mname',mname);
//
// }());
//
// var refreshnow = function () {
//                         $http.get('/movieinfo/movieinfo').success(function (response) {
//                             console.log('READ IS SUCCESSFUL');
//                             $scope.nowlist = response;
//                             $scope.now = "";
//                         });
//                     };




      //document.getElementById("nooftickets").innerHTML=ticketcnt;



  //  });
  //pay();



    $scope.addbk = function () {
  console.log($scope.bking);
     $http.post('/bk/bk', $scope.bking).success(function (response) {
            console.log(response);
console.log("CREATE IS SUCCESSFUL");
$rootScope.bookingconfirm=$scope.bking;
// console.log($rootScope.bookingconfirm);
$location.path('/confirm');
$route.reload();
            refreshbk();
        });
    };
};
