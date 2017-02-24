/**
 * Created by Administrator on 2017/2/24.
 * 测试express的routing 路由
 */
var express=require("express");
var app=express();
//同一个路由下区分请求方式
app.route('/aa').get(function (req,res) {
    console.log("get router");
}).post(function (req,res) {
    console.log("post router");
})

app.listen(4000);