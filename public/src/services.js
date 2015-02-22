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
                return $http.post('/exptype/new', { name: newExpTypeName });
            },
            removeExperienceType: function(expTypeId) {
                return $http.post('/exptype/delete', { id: expTypeId });   
            }
        };
    }]);