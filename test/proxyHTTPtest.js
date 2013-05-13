
URL = require('url');
db = require('./../lib/requestWriter')
module.exports = function(proxy) {
    var url;

    proxy.on('request', function(request, req_url) {
        url = req_url;
        //console.log(request);
        /*console.log(request.headers);
        console.log(request.method);
        console.log(request.url);
        console.log(request.connection.remoteAddress);
        console.log(request.connection.remotePort);*/
        (function(request) {
            var body = '';
            var reqObj = {
                method: request.method,
                headers: request.headers,
                url: request.url,
                body: '',
                remoteIP: request.connection.remoteAddress,
                remotePort: request.connection.remotePort
            };
            request.on('data', function(data){
                body += data;
                reqObj.body = body;
            });
            request.on('end', function(data){
                //console.log(body);
                //requestWriter save to mongo here
                db.requestWriter(reqObj);
            });
        })(request);

        //console.log("[" + url.hostname + url.pathname + "] - Processor request event, url: " + URL.format(req_url));
    });

    proxy.on('response', function(response) {
        //console.log("[" + url.hostname + url.pathname + "] - Processor response event, response server header: " + response.headers.server);
    });

    proxy.on('response_data', function(data) {
        //console.log("[" + url.hostname + url.pathname + "] - Processor response data event, length: " + data.length);
    });

    proxy.on('response_end', function() {
       //console.log("[" + url.hostname + url.pathname + "] - Processor response end event");
    });
};

