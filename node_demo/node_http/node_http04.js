/**
* fileName:node_http04.js
* author:gamehu
* date:2017/2/27 17:17
* desc:模拟客户端发起get请求
*/
var http=require("http");
//get请求,GET请求 不需要请求体，因此http模块也提供了以下便捷API。
http.get('http://www.baidu.com/', function (response) {

    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);
//response的data事件，其中data是获取到响应内容中的一部分时会触发改事件，function为回调函数
    response.on('data', function (chunk) {
        body.push(chunk);
        console.log(chunk);
    });
    console.log("============");
//response的end事件，end是完全接收完响应内容时会触发改事件，function为回调函数,还有error事件在发生错误时被触发..
    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});