/**
* fileName:node_http03.js
* author:gamehu
* date:2017/2/27 17:14
* desc:模拟服务器端接受请求，作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
*/
var http=require("http");
http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    //获取请求头相关内容，根据request对象的相关事件：data、end
    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
   // response.end();不加就会一直响应
}).listen(82);

/*服务端原样将客户端请求的请求体数据返回给客户端。
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    request.on('data', function (chunk) {
        response.write(chunk);
    });

    request.on('end', function () {
        response.end();
    });
}).listen(80);*/
