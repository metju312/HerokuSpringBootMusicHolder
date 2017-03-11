var app = angular
        .module("myModule",["ngRoute"])
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }])
        .config(["$routeProvider", function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "partial/home.html",
                    controller: "homeController"
                })
                .when("/dashboard", {
                    templateUrl: "partial/dashboard.html",
                    controller: "homeController"
                })
                .when("/search", {
                    templateUrl: "partial/search.html",
                    controller: "homeController"
                })
                .when("/songs", {
                    templateUrl: "partial/songs.html",
                    controller: "songsController"
                })
                .when("/playlists", {
                    templateUrl: "partial/playlists.html",
                    controller: "songsController"
                })
                .when("/login", {
                    templateUrl: "partial/login.html",
                    controller: "songsController"
                })
                // .otherwise({
                //     redirectTo: "/index"
                // })
        }])
        .controller("homeController", function ($scope, $http, $log, $location, $anchorScroll){

        })
        .controller("songsController", function ($scope, $http, $log, $location, $anchorScroll){

            $http({
                method:'GET',
                url:"/songs"})
                    .then(function (response) {
                        $scope.songs = response.data._embedded.songs;
                    }, function (reason) {
                        $scope.error = reason;
                    });

            $scope.scrollTo = function(scrollLocation){
                $location.hash(scrollLocation);
                $anchorScroll.yOffset = 20;
                $anchorScroll();
            }
        });
