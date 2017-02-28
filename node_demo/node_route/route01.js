var http = require("http");
var url = require("url");
var querystring = require("querystring");

function onRequest(request, response) {

    var pathname = url.parse(request.url).pathname;
    //获取参数值 通过querystring与url配合获取
    var arg = url.parse(request.url).query;          //arg => a=1
    console.log("Request for " + arg);
    //获取参数a的参数值
    var v = querystring.parse(arg).a;         //name => a

    console.log("pathname:" + pathname + ",v:" + v);
    //响应
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(2000);
