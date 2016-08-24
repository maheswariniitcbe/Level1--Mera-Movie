
'use strict';

module.exports = function($scope, $http, CityService, TheatreService) {
  $scope.admin = 'admin';

  $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});
//
// //City
//  var cityRefresh = function () {
//        var promise =  CityService.getCity();
//         promise.then(function(data){
//             $scope.cityList = data;
//             $scope.city = "";
//         })
//     };
//
//     cityRefresh();
//
// $scope.addCity = function(){
// 	var promise =  CityService.addCity($scope.city);
//     promise.then(function(data){
//         cityRefresh();
//     })
//
// }
//
// $scope.deleteCity = function(cityID){
//     var promise =  CityService.deleteCity(cityID);
//     promise.then(function(data){
//         cityRefresh();
//     })
// }
//
// $scope.editCity = function(cityID){
//     var promise =  CityService.editCity(cityID);
//     promise.then(function(data){
//         $scope.city = data[0];
//     })
// }
//
// $scope.updateCity = function(cityID){
//     var promise =  CityService.updateCity(cityID, $scope.city);
//     promise.then(function(data){
//         cityRefresh();
//     })
// }
//
// //Theatre
//  var theatreRefresh = function () {
//        var promise =  TheatreService.getTheatre();
//         promise.then(function(data){
//             $scope.theatreList = data;
//             $scope.theatre = "";
//         })
//     };
//
//     theatreRefresh();
//
// $scope.addTheatre = function(){
//     var promise =  TheatreService.addTheatre($scope.theatre);
//     promise.then(function(data){
//         theatreRefresh();
//     })
//
// }
//
// $scope.deleteTheatre = function(theatre){
//     var promise =  TheatreService.deleteTheatre(theatre._id);
//     promise.then(function(data){
//         theatreRefresh();
//     })
// }
//
// $scope.editTheatre = function(theatre){
//     var promise =  TheatreService.editTheatre(theatre._id);
//     promise.then(function(data){
//         $scope.theatre = data[0];
//     })
// }
//
// $scope.updateTheatre = function(){
//     var promise =  TheatreService.updateTheatre($scope.theatre);
//     promise.then(function(data){
//         theatreRefresh();
//     })
// }
//
(function(){

    var userRepoService = function($http){

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
    module.factory('userRepoService', userRepoService);

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




                          $scope.addMovie = function () {
                              console.log(movieObj);
                              $http.post('/movie/movie',movieObj).success(function (response) {
                                  console.log(response);
                                  console.log("CREATE IS SUCCESSFUL");
                                  refresh5();
                              });
                          };

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
             $scope.removeMovie = function (id) {
                              console.log(id);
                              $http.delete('/movie/movie/' + id._id).success(function (response) {
                                  console.log(response);
                                  console.log('DELETED SUCCESSFULLY');
                                  refresh5();
                              });
                          };

                          $scope.editMovie= function (id) {
                               $http.get('/movie/movie/' + id._id).success(function (response) {
                                  $scope.movieObj = response[0];
                              });
                          };

                          $scope.updateMovie = function () {
                              console.log("REACHED UPDATE");
                              console.log($scope.movieObj._id);
                              $http.put('/movie/movie/' + $scope.movieObj._id, $scope.movieObj).success(function (response) {
                                  console.log(response);
                                  refresh5();
                              })
                          }




    //movie curds ends


    var refreshnow = function () {
                            $http.get('/movieinfo/movieinfo').success(function (response) {
                                console.log('READ IS SUCCESSFUL');
                                $scope.nowlist = response;
                                $scope.now = "";
                            });
                        };

                    refreshnow();
$scope.addMovieInfo = function () {
                              console.log($scope.now);
                              $http.post('/movieinfo/movieinfo',$scope.now).success(function (response) {
                                  console.log(response);
                                  console.log("CREATE IS SUCCESSFUL");
                                  refreshnow();
                              });
                          };
 $scope.removeMovieInfo = function (id) {
                              console.log(id);
                              $http.delete('/movieinfo/movieinfo/' + id._id).success(function (response) {
                                  console.log(response);
                                  console.log('DELETED SUCCESSFULLY');
                                  refreshnow();
                              });
                          };

                          $scope.editMovieInfo= function (id) {
                               $http.get('/movieinfo/movieinfo/' + id._id).success(function (response) {
                                  $scope.now = response[0];
                              });
                          };

                          $scope.updateMovieIfno = function () {
                              console.log("REACHED UPDATE");
                              console.log($scope.now._id);
                              $http.put('/movieinfo/movieinfo/' + $scope.now._id, $scope.now).success(function (response) {
                                  console.log(response);
                                  refreshnow();
                              })
                          }

// city
var refresh = function () {
        $http.get('/city/city').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addCity = function () {
        console.log($scope.contact);
        $http.post('/city/city', $scope.contact).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };


    $scope.removeCity = function (id) {
        console.log(id);
        $http.delete('/city/city/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function (id) {
         $http.get('/city/city/' + id._id).success(function (response) {
            $scope.contact = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.contact._id);
        $http.put('/city/city/' + $scope.contact._id, $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        })
    }


    // trailer collection


var tailer_refresh = function () {
        $http.get('/trailerserver/trailerserver').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.Trailerlist = response;
            $scope.trailerobj = "";
        });
    };

    $scope.addTrailer = function () {
        console.log($scope.trailerobj);
        $http.post('/trailerserver/trailerserver', $scope.trailerobj).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            tailer_refresh();
        });
    };

    $scope.removeTrailer = function (id) {
        console.log(id);
        $http.delete('/trailerserver/trailerserver/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            tailer_refresh();
        });
    };

    $scope.editTrailer = function (id) {
         $http.get('/trailerserver/trailerserver/' + id._id).success(function (response) {
            $scope.trailerobj = response[0];
        });
    };

    $scope.updateTrailer = function () {
        console.log("REACHED UPDATE");
        console.log($scope.trailerobj._id);
        $http.put('/trailerserver/trailerserver/' + $scope.trailerobj._id, $scope.trailerobj).success(function (response) {
            console.log(response);
            tailer_refresh();
        })
    }
    // threater
    var threater_refresh = function () {
        $http.get('/threater/threater').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.Threaterlist = response;
            $scope.tobj = "";
        });
    };

    $scope.addThreater = function () {
        console.log($scope.tobj);
        $http.post('/threater/threater', $scope.tobj).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            threater_refresh();
        });
    };

    $scope.removeThreater = function (id) {
        console.log(id);
        $http.delete('/threater/threater/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            threater_refresh();
        });
    };

    $scope.editThreater = function (id) {
         $http.get('/threater/threater/' + id._id).success(function (response) {
            $scope.tobj = response[0];
        });
    };

    $scope.updateThreater = function () {
        console.log("REACHED UPDATE");
        console.log($scope.tobj._id);
        $http.put('/threater/threater/' + $scope.tobj._id, $scope.tobj).success(function (response) {
            console.log(response);
           threater_refresh();
        })
    }
// Showtiming
    var refreshshow = function () {
        $http.get('/showtiming/showtiming').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.Timelist = response;
            $scope.timeobj = "";
        });
    };

    $scope.addTime = function () {
        console.log($scope.timeobj);
        $http.post('/showtiming/showtiming', $scope.timeobj).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refreshshow();
        });
    };

    $scope.removeTime = function (id) {
        console.log(id);
        $http.delete('/showtiming/showtiming/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refreshshow();
        });
    };

    $scope.editTime = function (id) {
         $http.get('/showtiming/showtiming/'+ id._id).success(function (response) {
            $scope.timeobj = response[0];
        });
    };

    $scope.updateTime = function () {
        console.log("REACHED UPDATE");
        console.log($scope.timeobj._id);
        $http.put('/showtiming/showtiming/' + $scope.timeobj._id, $scope.timeobj).success(function (response) {
            console.log(response);
           refreshshow();
        })
    }

};
