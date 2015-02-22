angular.module('ratedExpApp')
    .controller('ExpTypesController', ['$scope', 'expTypesFactory', 'appSettings', '$log', function($scope, expTypesFactory, appSettings, $log) {      
        $scope.appSettings = appSettings;
        
        function refreshExpTypes() {
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
        
        refreshExpTypes();
        
        $scope.addNewExpType = function(newExpTypeName) {
            expTypesFactory.addExperienceType(newExpTypeName)
                .success(function(data, status, headers, config) {
                    $scope.result = data.result;
                    refreshExpTypes();
                })
                .error(function(data, status, headers, config) {
                    $scope.error = 'Status code: ' + status + ', Error: ' + data.error;
                    $log.error($scope.error);
                    $scope.result = 'Error!';
                });
            
            $scope.newExpTypeName = null;
        };
        
        $scope.deleteExpType = function(expTypeId) {            
            expTypesFactory.removeExperienceType(expTypeId)
                .success(function(data, status, headers, config) {
                    $scope.result = data.result;
                    refreshExpTypes();
                })
                .error(function(data, status, headers, config) {
                    $scope.error = 'Status code: ' + status + ', Error: ' + data.error;
                    $log.error($scope.error);
                    $scope.result = 'Error!';
                });  
        };
    }]);