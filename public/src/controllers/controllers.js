angular.module('ratedExpApp')
    .controller('ExpTypesController', ['$scope', 'expTypesFactory', 'appSettings', '$log', function($scope, expTypesFactory, appSettings, $log) {      
        $scope.appSettings = appSettings;
        
        function init() {
            expTypesFactory.getExperienceTypes()
                .success(function(expTypes) {
                    $scope.expTypes = expTypes;
                })
                .error(function(data, status, headers, config) {
                    //  handle error
                    $scope.expTypes = {};
                    $scope.error = 'Status code: ' + status + ', Error: ' + data.error;
                    $log.error($scope.error);
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

    .controller('ExpTypeController', ['$scope', '$routeParams', 'expTypesFactory', '$log', function($scope, $routeParams, expTypesFactory, $log) {
        var expId = $routeParams.id;
        
        function init() {
            expTypesFactory.getExperienceType(expId)
                .success(function(expType) {
                    $scope.expType = expType;
                })
                .error(function(data, status, headers, config) {
                    //  handle error
                    $scope.expType = {};
                    $scope.error = 'Status code: ' + status + ', Error: ' + data.error;
                    $log.error($scope.error);
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