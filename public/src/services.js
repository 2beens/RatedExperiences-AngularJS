angular.module('ratedExpApp')
    .factory('expTypesFactory', function() {
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
            }
        };
    });