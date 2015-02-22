angular.module('ratedExpApp')
    .factory('expTypesFactory', ['$http', function($http) {
        return {
            getExperienceTypes: function() {
                return $http.get('/exptypes');
            },
            getExperienceType: function(id) {
                return $http.get('/exptype/' + id);
            },
            addExperienceType: function(newExpTypeName) {
                //expTypes.push({"id": expTypes.length + 1, 
                //               "name": {"value": newExpTypeName, "type": "text"}});
                //should be a call to node server
            }
        };
    }]);