/**
 * Created by pc on 2016/5/1.
 */
var http = require("http");
var url = require("url");
var serveStatic = require("serve-static");
function start (route,handle){
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("pathname" + pathname);
        route(pathname,response,request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started on point 8888");
}

exports.start = start;