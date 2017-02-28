/**
 * fileName:post.js
 * author:gamehu
 * date:2017/2/28 16:46
 * desc:post方式
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index1.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index1.html" );
})

app.post('/test_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    response = {
        name:req.body.name,
        age:req.body.age
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

 app.listen(8084);
