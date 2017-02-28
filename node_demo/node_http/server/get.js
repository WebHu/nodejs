/**
 * Created by Administrator on 2017/2/28.
 */
var express = require('express');
var app = express();


app.get('/index.htm', function (req, res) {
    //__dirname获取当前目录
    res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/test_get', function (req, res) {

    // 输出 JSON 格式
  var  response = {
      //query获取参数
        name:req.query.name,
        age:req.query.age
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8083, function () {



})