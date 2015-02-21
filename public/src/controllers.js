angular.module('ratedExpApp')
    .controller('ExpTypesController', ['$scope', 'expTypesFactory', function($scope, expTypesFactory) {      
        var maxId = 5;
        
        $scope.expTypes = expTypesFactory.getExperienceTypes();
        
        $scope.addNewExpType = function(newExpTypeName) {
            $scope.expTypes.push({"id": maxId, "name": {"value": newExpTypeName, "type": "text"}});
            $scope.newExpTypeName = null;
        };
        
        $scope.deleteExpType = function(expTypeId) {            
            findAndRemove($scope.expTypes, 'id', expTypeId);
        };
    }])
    .controller('ExpTypeController', ['$scope', '$routeParams', 'expTypesFactory', function($scope, $routeParams, expTypesFactory) {
        var expId = $routeParams.id;
        
        $scope.expTypes = expTypesFactory.getExperienceTypes();
        
        $scope.expType = null;
        for(var i in $scope.expTypes) {
            if($scope.expTypes[i].id === parseInt(expId)) {
                $scope.expType = $scope.expTypes[i];
                break;
            }
        }
        
    }]);

///////////////////////////////////////////////////////////////////////////////
function findAndRemove(array, property, value) {
   $.each(array, function(index, result) {
      if(result[property] == value) {
          //Remove from array
          array.splice(index, 1);
          return;
      }    
   });
}