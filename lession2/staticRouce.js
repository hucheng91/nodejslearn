/**
 * Created by pc on 2016/5/2.
 */

var express = require("express");
function staticRouce(app){
    app.use(express.static(__dirname +"/public"));
}
exports.staticRouceoute = staticRouce;