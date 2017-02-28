/**
 * fileName:post.js
 * author:gamehu
 * date:2017/2/28 15:40
 * desc:post请求
*/
var http = require('http');
var querystring = require('querystring');
var url = require('url');
var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });

    // 解析 url 参数,post无效
//    var params = url.parse(req.url, true).query;
    console.log(params);
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            //第一次请求输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
