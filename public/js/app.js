angular.module("demoApp", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider  // the routeprovider for other routes
            .when("/", {
                templateUrl: "list.html",
                controller: "ListController",
                resolve: {
                    contacts: function(Contacts) {
                        return AllPower.getdata();
                    }
                }
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .service("AllPower", function($http) {
        this.getdata = function() {
            return $http.get("/AllPower").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding nilm data from database.");
                });
        }

    })
    // this  is the controller
    .controller("ListController", function(AllPower, $scope) {
        $scope.AllPowerAllPower = AllPower.data;
    })
  