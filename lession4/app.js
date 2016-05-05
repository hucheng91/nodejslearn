/**
 * Created by pc on 2016/5/2.
 */

var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));

app.listen(8888);



