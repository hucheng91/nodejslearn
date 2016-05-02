/**
 * Created by pc on 2016/5/1.
 */
var router = require("./router");
var server = require("./server");
server.start(router.route);

