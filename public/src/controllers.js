angular.module('ratedExpApp')
    .controller('ExpTypesController', ['$scope', 'expTypesFactory', 'appSettings', function($scope, expTypesFactory, appSettings) {      
        $scope.appSettings = appSettings;
        
        $scope.expTypes = expTypesFactory.getExperienceTypes();
        
        $scope.addNewExpType = function(newExpTypeName) {
            expTypesFactory.addExperienceType(newExpTypeName);
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