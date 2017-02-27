/**
* fileName:node_http01.js
* author:gamehu
* date:2017/2/27 16:08
* desc: 实现网络操作：创建http服务器,接受请求
*/
var http=require("http");
//createServer用于创建服务器，然后调用listen监听3000端口，function为回调函数，执行一次回调一次
http.createServer(function (request,response) {
    console.log("kkk");
    response.writeHead(200,{'Content-type':'text-plain'});
    response.end('Hai http');
}).listen(3000);