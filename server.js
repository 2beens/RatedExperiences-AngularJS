var express = require('express');
var app = express();

var port = 3000;

app.use(express.static('./public'));

//app.get('/', function(req, res) {
//    console.log("Request has been made");
//    res.sendFile('public/index.html', {"root": "."});
//});

///////     GET ALL EXP TYPES   ///////////////////////////////////
app.get('/exptypes', function(req, res) {
    console.log('Request for all experience types');
    res.json(expTypes);
});

///////     GET ALL EXP TYPE BY ID   //////////////////////////////
app.get('/exptype/:id', function(req, res) {
    var expTypeId = parseInt(req.params.id);
    console.log('Request for experience type id: ' + expTypeId);
                
    var expType = [];
    for(var i = 0, len = expTypes.length; i < len; i++) {
        if(expTypes[i].id === expTypeId) {
            expType = expTypes[i];
            break;
        }
    }
    res.json(expType);
});


///////     CREATE NEW EXP TYPE   /////////////////////////////////
//app.get(

///////     DELETE EXP TYPE   /////////////////////////////////////
//app.get(


//start server
app.listen(port);
console.log('Server listening for request at port ' + port);

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