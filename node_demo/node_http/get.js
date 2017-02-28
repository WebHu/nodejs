/**
 * fileName:get_post.js
 * author:gamehu
 * date:2017/2/28 15:30
 * desc: get、post请求处理
*/
var http = require('http');
var url = require('url');
var util = require('util');
//处理get请求
http.createServer(function(req, res){
 //   res.end(util.inspect(url.parse(req.url,true)),"utf-8");
    //res.end(url.parse(req.url).pathname);
    //charset=utf-8 加上这个解决中文乱码
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3000);