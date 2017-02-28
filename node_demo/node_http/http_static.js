/**
 * fileName:http_static.js
 * author:gamehu
 * date:2017/2/28 16:27
 * desc:访问静态文件
*/
var express = require('express');
var app = express();

app.use(express.static('../../public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})
//http://localhost:8082/images/img01.png 访问静态资源
var server = app.listen(8082, function () {


})