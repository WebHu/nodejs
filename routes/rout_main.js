/**
 * Created by Administrator on 2017/2/24.
 */
var express = require('express');
var app = express();

var t = require('./rout_test04');
//调用rout_test04的hai方法
app.get('/hai', t.hai);
app.get('/',function (req,res) {
    //输出rout_test4的pr属性值
    console.log(t.pr);
});
app.listen(4000);