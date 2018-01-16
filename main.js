angular .module('app', [])
        .controller('mainCtrl', ["$scope", function($scope){
            $scope.value = 1337;
            $scope.text = "Bonjour";
            $scope.date = "1516230499000";

              $scope.users = [
                  {name: "Sam"},
                  {name: "Jim", email: "Sam@gmail.com"},
                  {name: "Ben"}
              ];

              $scope.filterValue = {name: "Sam"};
 }])