angular.module('ratedExpApp')
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