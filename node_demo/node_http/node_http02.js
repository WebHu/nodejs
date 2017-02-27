/**
 * fileName:node_http02.js
 * author:gamehu
 * date:2017/2/27 17:10
 * desc:模拟客户端发送post请求（作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。）
 */

var http = require("http");
var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
//post请求
var request = http.request(options, function (response) {

    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);
//response的data事件，其中data是获取到响应内容中的一部分时会触发改事件，function为回调函数
    response.on('data', function (chunk) {
        body.push(chunk);
        console.log(chunk);
    });
    console.log("============");
//response的end事件，end是完全接收完响应内容时会触发改事件，function为回调函数
    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });

});

//发送数据
request.write('Hello World');
//不能漏掉，结束请求，否则服务器将不会收到信息。
request.end();