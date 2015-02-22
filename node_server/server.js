var http = require("http");
var url = require("url");

function startServer(routeAndServe, expTypes) {	
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
    	console.log("Request for " + pathname + " received.");

    	var valueFromServer = routeAndServe(pathname, expTypes);

	  	response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(JSON.stringify(valueFromServer));
	  	response.end();
	}

	console.log('Server starded at localhost:8888...');

	http.createServer(onRequest).listen(8888);
}

exports.start = startServer;