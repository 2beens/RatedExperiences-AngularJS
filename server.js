var express = require('express');
var app = express();

app
	.use(express.static('./public'))
	.get('*', function(req, res) {
		res.sendFile('public/index.html', {"root": "."});
	})
	.listen(3000);