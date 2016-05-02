/**
 * Created by pc on 2016/5/1.
 */
var handle = require("./requestHandlers");
var mimeType = require.("./mimeType")
function route (pathname,response,request){
    console.log("About to route a request for" + pathname);

        handle.handle(pathname,request,response);
}
exports.route = route;