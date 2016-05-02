/**
 * Created by pc on 2016/5/2.
 */

var express = require("express");
var staticRouce = require("./staticRouce");   //存放静态资源目录
var route = require("./requestHandle");
var app = express();
staticRouce.staticRouceoute(app);
route.route(app);
app.listen(8888);
console.log("lissten port 8888")
