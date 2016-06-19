angular.module("contactsApp", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider  // the routeprovider for other routes
            .when("/", {
                templateUrl: "list.html",
                controller: "ListController",
                resolve: {
                    contacts: function(Contacts) {
                        return nilm_demo.getContacts();
                    }
                }
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .service("nilm_demo", function($http) {
        this.getContacts = function() {
            return $http.get("/nilm_demo").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding nilm data from database.");
                });
        }

    })
    // this  is the controller
    .controller("ListController", function(nilm_demo, $scope) {
        $scope.nilm_demo = nilm_demo.data;
    })
  