/**
 * Created by pc on 2016/5/2.
 */
var express = require("express");
var router = express.Router();
var fs = require("fs");
var  path = require("path");
var ablotePath = path.join(__dirname, 'view/'); // 获取绝对路径，__dirname 全局对象 文件绝地路径
var router = express.Router();
var routeObject = {};
    routeObject["/index"] = index;
    routeObject["/login"] = login;
    routeObject["/register"] = register;
    routeObject["/loginverificat"] = loginverificat;

    function index(request,response,next){;
        response.sendFile(ablotePath+"index.html");    //sendFile相当封装了fs.的readFile()方法如下
        /* fs.readFile("./view/index.html","utf-8", function (err,data) {
         if(err){
         response.writeHead(404,"not found");
         response.end()
         }
         console.log(data)
         //   response.writeHead(200, {"Content-Type": "text/html;charsct=utf-8"})
         response.send(data);
         response.end();
         });*/
    }
    function login(request,response,next){
        response.sendFile(ablotePath+"login.html");
    }
    function register(request,response,next){
        response.sendFile(ablotePath+"login.html");
    }
    function loginverificat(request,response,next){
        console.log(request.body);
        var email = request.param("email");
        var pwd = request.param("pwd");
        console.log("email:"+email+"           pwd:"+pwd);
        response.json({email:email,pwd:pwd});
    }
function route (app){
   /* app.post("/loginverificat",function(req,res){
        console.log("going");
        console.log(JSON.stringify(req.body));
     //   console.log(JSON.stringify(req.ip));
        console.log(JSON.stringify(req.params));
        console.log(JSON.stringify(req.query));

    });*/

   app.use(function(request,response,next){
        if(routeObject[request.url]){
            if(request.url==="/loginverificat"){
                console.log("loginverificat");

            }else{
                routeObject[request.url](request,response,next);
            }
        }else{
            console.log("not found");
            response.send("404  not found")
        }

    });

}
exports.route = route;






