var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var port = 3000;

app.use(express.static('./public'));

// parse application/json 
app.use(bodyParser.json());

//app.get('/', function(req, res) {
//    console.log("Request has been made");
//    res.sendFile('public/index.html', {"root": "."});
//});

///////     GET ALL EXP TYPES   ///////////////////////////////////
app.get('/exptypes', function(req, res) {
    console.log('Request for all experience types');
    res.status(200).json(expTypes);    
});

///////     GET ALL EXP TYPE BY ID   //////////////////////////////
app.get('/exptype/:id', function(req, res) {
    var expTypeId = parseInt(req.params.id);
    console.log('Request for experience type id: ' + expTypeId);
                
    var expType = null;
    for(var i = 0, len = expTypes.length; i < len; i++) {
        if(expTypes[i].id === expTypeId) {
            expType = expTypes[i];
            break;
        }
    }
    
    if(expType) {
        res.status(200).json(expType);
    }else{
        res.status(404).json({ error: 'Experience type ID: ' + expTypeId + ' cannot be found.'});
    }
});

///////     CREATE NEW EXP TYPE   /////////////////////////////////
app.post('/exptype/new', function(req, res) {
    var newExpTypeName = req.body.name;
    
    if(newExpTypeName) {
        console.log('Trying to add new experience type [' + newExpTypeName + ']');
        expTypes.push({"id": expTypes.length + 1, "name": {"value": newExpTypeName, "type": "text"}});
                       
        res.status(200).json({result: 'OK'});
    }else{
        console.log('Cannot add new experience type: name not provided.');
        res.status(400).json({ error: 'New experience type name not provided.'});
    }
});

///////     DELETE EXP TYPE   /////////////////////////////////////
app.post('/exptype/delete', function(req, res) {
     var expTypeId = req.body.id;
    
    if(expTypeId) {
        console.log('Trying to delete experience type ID[' + expTypeId + ']');
        var deletedOK = findAndRemoveExpType(expTypeId);
        var resMessage = 'OK';
        var status = 200;
        if(!deletedOK){
            resMessage = 'Not deleted!';
            status = 404;
        }
        
        res.status(status).json({result: resMessage});
    }else{
        console.log('Cannot delete experience type: id not provided.');
        res.status(400).json({ error: 'Experience type cannot be deleted: id not provided.'});
    }
});


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

function findAndRemoveExpType(expTypeId) {
    var deletedOk = false;
    
    for(var i in expTypes) {
        if(expTypes[i].id === expTypeId) {
            expTypes.splice(i, 1);
            deletedOk = true;
            break;
        }
    }
    
    return deletedOk;
}