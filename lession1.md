# node.js学习过程中的一些感悟

------

因为4.30号加班，导致五一没有出去玩，2天假就在家撸代码，刚好学习下node.js
 在开始学习node.js的过程中，我尝试建立一个简单的web页面访问，node.js建立服务器真是超级简单，几行代码就搞定
 
```javascirpt
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
```
然后我以为我自己只要把对应得类似java的后台，前端请求路径写好就可以访问了，然并卵，我想的太简单，node.js只是对计算机的一个[端口监听](https://github.com/hucheng91/nodejslearn/blob/master/lession1%2Fserver.js)，并不是像tomcat一样帮我们把路由都搞好了，然后我就去搞了个[简单的路由](https://github.com/hucheng91/nodejslearn/blob/master/lession1%2Frouter.js)的管理，目前只支持html格式;页面可算能访问到了，但.js，jpg...这些后台静态文件是不能访问到了，接着还得写个mimetype文件；以前使用tomcat，没想过这方面的问题，这让我对服务器的概念有些新的认识，看来得去看看的tomcat的源码，下一节就去学习express框架；
