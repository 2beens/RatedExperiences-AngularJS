angular.module('ratedExpApp', [])
    .controller('MainController', ['$scope', function($scope) {      
        $scope.expTypes = 
        [
            {
                "id": 1,
                "name": {"value": "Beer", "type": "text"},
            },
            {
                "id": 2,
                "name": {"value": "Cities", "type": "text"},
            },
            {
                "id": 3,
                "name": {"value": "Cars", "type": "text"},                
            }
        ];
        
        
    }]);

