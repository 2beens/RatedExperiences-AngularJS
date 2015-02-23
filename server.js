var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var api = require("./api");
var mlog = require("./mini-log");
var app = express();
var expTypes;

// define the port
var port = 3000;

// serve all files from /public folder
app.use(express.static('./public'));

// parse application/json 
app.use(bodyParser.json());

// read the file and send to the callback
fs.readFile('./data.json', handleFile);

// write the callback function
function handleFile(err, data) {
    if (err) 
        throw err;
    
    mlog.info('Reading experience types from the disk...');
    expTypes = JSON.parse(data);
    mlog.info('Received ' + expTypes.length + ' experience types.');
    
    api.startRouting(app, expTypes);
    mlog.info('Started serving eperience types API...');
    
    //start server
    app.listen(port);
    mlog.info('Server listening for request at port ' + port);

    //mlog.info('Info example');
    //mlog.debug('debug example');
    //mlog.data('data example');
    //mlog.warn('warn example');
    //mlog.error('Error example');
}