var express = require('express');
//var api = require('./api');
var app = express();

app
	.use(express.static('./public'))
    //.use('/api', api)
	.get('*', function(req, res) {
		res.sendFile('public/index.html', {"root": "."});
	})
	.listen(3000);