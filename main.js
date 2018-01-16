angular .module("app", [])
        .controller("mainCtrl", ["$scope", function($scope){
            $scope.name = "Akkad";
        }])
        .controller("childCtrl", ["$scope", function($scope){
            $scope.name = "le";
        }])
        .controller("grantCtrl", ["$scope", function($scope){
            $scope.name = "king";
        }]);