var server = require("./server");
var router = require("./router");

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

server.start(router.routeAndServe, expTypes);