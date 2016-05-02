/**
 * Created by pc on 2016/5/1.
 */
var  fs = require("fs");
var  express = require("express");
var app = express();
function index(pathname,request,response) {
    fs.readFile("./view/index.html","utf-8", function (err,data) {
        if(err){
            response.writeHead(404,"not found");
            response.end()
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "text/html;charsct=utf-8"})
        response.write(data);
        response.end();
    });
  

};
function notFound(response) {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("not found");
    response.end();
}
function  handle(pathname,request,response){
    if(pathname == "/index"){
        index(pathname,request,response);
    }else{
        notFound(response);
    }
}
exports.handle = handle;