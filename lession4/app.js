/**
 * Created by pc on 2016/5/3.
 */
var express = require("express");
var hbs = require("hbs");
var bodyParser = require("body-parser");
var multer = require('multer'); //文件上传需要
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: 'tmp/' }));   //这种写法是  multerb包0.x版本方法，1.x以后不是这种方法；
var blogEngine = require("./blog");

app.set("view engine","html");      //记得是view 不是views,html根据自己的模板后缀名确定，这个是必须指定的，不然报错
app.set('views', __dirname + '/views') //指定模板的目录
app.engine("html",hbs.__express);   //同上
//app.use(express.bodyP);
app.use(express.static("public"));



app.get("/",function(req,res){
    res.render("index",{title:"nodejs里express练习"});
});
app.get("/login",function(req,res){
    res.render("login");
});
app.post("/loginverificat",function(req,res){
    console.log(JSON.stringify(req.body));
    res.json(req.body);
});
app.get("/article/:id?",function(req,res){
    if(req.params.id){
        var entry = blogEngine.getBlogEntry(req.params.id);
        res.render("articleDetail",{title:entry.title, blog:entry});
    }else{
        res.render('article',{title:"最近文章", entries:blogEngine.getBlogEntries()});
    }

});
app.listen(8888);
console.log("the port 8888 open");
