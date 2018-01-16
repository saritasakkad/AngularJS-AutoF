angular .module("app", [])
        .controller("mainCtrl", ["$scope", function($scope){
            $scope.users = [

                   {name: "Akkad"},
                   {name: "c'est"},
                   {name: "the"},
                   {name: "King"}
     ];

     $scope.addUser = function() {
        $scope.users.push({name: "New User"});
     }
 }]);