angular .module('app', [])
        .controller('mainCtrl', ["$scope", function($scope){
       
        $scope.sampleCheckbox = true;

        $scope.hasChanged = function() {
            console.log("Changé");
        }
          
            $scope.order = {
                pts: true,
                j: true,
                g: true,
                n:true
            };

           
}]) 