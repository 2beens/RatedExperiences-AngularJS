angular.module('ratedExpApp')
    .factory('expTypesFactory', ['$http', function($http) {
        var expTypes = 
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
            },
            {
                "id": 4,
                "name": {"value": "Travels", "type": "text"},                
            }
        ];
        
        return {
            getExperienceTypes: function() {
                return expTypes;
                //return $http.get('http://localhost:8888/contacts');
            },
            addExperienceType: function(newExpTypeName) {
                expTypes.push({"id": expTypes.length + 1, "name": {"value": newExpTypeName, "type": "text"}});
            }
        };
    }]);