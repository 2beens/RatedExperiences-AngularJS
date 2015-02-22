function routeAndServe(pathname, expTypes) {
    console.log("About to route a request for " + pathname);
    
    var jsonResult;
    
    if(pathname === '/contacts') {
        jsonResult = expTypes;
    } else {
        jsonResult = {}; 
    }
    
    return jsonResult;
}

exports.routeAndServe = routeAndServe;