/**
 * Created by pc on 2016/5/2.
 */
var express = require("express");
var  path = require("path");
var ablotePath = path.join(__dirname, 'views/'); // 获取绝对路径，__dirname 全局对象 文件绝地路径
var app = express();

app.use(express.static(__dirname +"/public"));
/*use是给整个reques加一个中间件，中间件使用方法,next()方法将路由传给下一个中间件
 ，若没有next()方法,就不进行下一个*/
app.use(function(req,res,next){
    console.log("comming");
    next();
});
app.use(function(req,res,next){
    console.log("comming two");
    //res.writeHead(200,{"Content-Type":"text/plain"});
    res.send("hellow");
    res.end();

});
app.use(function(req,res,next){
    console.log("comming three");
});
app.get("/login",function(req,res){
 res.sendFile(ablotePath+"login.html");
 });
//app.post,app.get本质上是对app.use的再次封装,
//http://localhost:8888/login/hc,
app.get("/login/:who?",function(req,res){
    console.log(req.body);
    console.log(req.param);
    console.log(req.params.who); //hc
});
//S上面面get方法可以成
app.use(function(request, response, next) {
    if (request.url == "/login/:who?") {
    } else {
        next();
    }
});
//在前台ajaxt post方式提交需要引用 body-parser 包
var bodyParser = require("body-parser");
var multer = require('multer'); //文件上传需要的包
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: 'tmp/' }));   //这种写法是  multerb包0.x版本方法，1.x以后不是这种方法；
app.post("/loginverificat",function(req,res){
      console.log(JSON.stringify(req.body));
    res.json({success:true});
});

app.listen(8888);
console.log("lissten port 8888")
