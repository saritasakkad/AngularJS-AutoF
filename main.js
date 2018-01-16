angular .module("app", [])
        .controller("mainCtrl", ["$scope", function($scope){
            $scope.users = [

                   {name: "Akkad", email: "kad@gmail.com"},
                   {name: "c'est", email: "cad@gmail.com"},
                   {name: "the", email: "tad@gmail.com"},
                   {name: "King", email: "kkad@gmail.com"}
     ];
 }]);