angular.module('ratedExpApp', [])
    .controller('MainController', ['$scope', function($scope) {      
        var maxId = 4;
        
        $scope.expTypes = 
        [
            {
                "id": 1,
                "name": {"value": "Beer", "type": "text"}
            },
            {
                "id": 2,
                "name": {"value": "Cities", "type": "text"}
            },
            {
                "id": 3,
                "name": {"value": "Cars", "type": "text"},                
            }
        ];
        
        $scope.addNewExpType = function(newExpTypeName) {
            $scope.expTypes.push({"id": maxId, "name": {"value": newExpTypeName, "type": "text"}});
            $scope.newExpTypeName = null;
        };
        
        $scope.deleteExpType = function(expTypeId) {            
            findAndRemove($scope.expTypes, 'id', expTypeId);
        };
    }]);

function findAndRemove(array, property, value) {
   $.each(array, function(index, result) {
      if(result[property] == value) {
          //Remove from array
          array.splice(index, 1);
          return;
      }    
   });
}