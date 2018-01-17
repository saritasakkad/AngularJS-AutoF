angular .module('app', [])
        .controller('mainCtrl', ["$scope", function($scope){
       
        

        $scope.hasChanged = function() {
            console.log("Changé");
        }
          
            $scope.users = [
                {name: "Sam", age: 26},
                {name: "Jam", age: 46},
                {name: "Kam", age: 16},
                {name: "Lam", age: 76},
            ];

           
}]) 