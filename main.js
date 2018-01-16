angular .module("app", [])
        .controller("mainCtrl", ["$scope", function($scope){
            $scope.user = {
                name: "Akkad",
                age: 15,
                email: "kad@gmail.com"
            };
        }]);

        //.controller("mainCtrl", ["$scope", function($scope){
            //$scope.users = [

               //     {name: "Akkad"},
                //    {name: "c'est"},
                //    {name: "the"},
               //     {name: "King"}
            //];
       // }]);