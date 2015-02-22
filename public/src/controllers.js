angular.module('ratedExpApp')
    .controller('ExpTypesController', ['$scope', 'expTypesFactory', 'appSettings', function($scope, expTypesFactory, appSettings) {      
        $scope.appSettings = appSettings;
        
        function init() {
            expTypesFactory.getExperienceTypes()
                .success(function(expTypes) {
                    $scope.expTypes = expTypes;
                })
                .error(function(data, status, headers, config) {
                    //TODO: handle error
                    $scope.expTypes = {};
                });
        }
        
        init();
        
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
        
        function init() {
            expTypesFactory.getExperienceType(expId)
                .success(function(expType) {
                    $scope.expType = expType;
                })
                .error(function(data, status, headers, config) {
                    //TODO: handle error
                    $scope.expType = {};
                });
        }
        
        init();        
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