var app = angular.module('app', [])

app.controller('mainCtrl', function($scope){
       
        $scope.tabs = [
                {title: "Home", content: "Home"},
                {title: "Profile", content: "Profile"},
                {title: "Messages", content: "Messages"},
                {title: "Settings", content: "Settings"}
                
        ];

        $scope.active = 0;
        $scope.submit = false;

        $scope.setActive = function(index) {
                $scope.active = index;
        }

        $scope.isActive = function(index) {
                return $scope.active == index;
        }

        $scope.removeTab = function(index) {
                $scope.tabs.splice(index, 1);
        }

        $scope.addTab = function(isValid) {
                if (isValid) {

                        $scope.tabs.push({
                                title: $scope.name,
                                content: $scope.content
                        });

                }
                
                $scope.submit = true;
        }
           
}); 