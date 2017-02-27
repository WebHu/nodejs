/**
 * fileName:node_https01.js
 * author:gamehu
 * date:2017/2/27 17:45
 * desc:https，https模块与http模块极为类似，区别在于https模块需要额外处理SSL证书。
 * 但如果目标服务器使用的SSL证书是自制的，不是从颁发机构购买的，默认情况下https模块会拒绝连接，
 * 提示说有证书安全问题。在options里加入rejectUnauthorized: false字段可以禁用对证书有效性的检查，从而允许https模块请求开发环境下使用自制证书的HTTPS服务器。
*/
/*
var https=require("https");
//设置私钥、公钥（SSL相关）
var options = {
    key: fs.readFileSync('./ssl/default.key'),
    cert: fs.readFileSync('./ssl/default.cer')
};

var server = https.createServer(options, function (request, response) {
    // ...
}).listen(6000);*/
var https=require("https");
var fs=require("fs");
//post 请求
var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'post'
   // key: fs.readFileSync('./ssl/default.key'),
   // cert: fs.readFileSync('./ssl/default.cer')
};

var request = https.request(options, function (response) {
    

    
});
request.write("g");
request.end();
