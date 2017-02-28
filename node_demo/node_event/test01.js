/**
 * fileName:server01.js
 * author:gamehu
 * date:2017/2/28 9:23
 * desc:
*/
var express=require("express");
var path=require("path");
var app=express();

app.use(express.static(path.join(__dirname, 'public/images')));
/*app.use(express.static(__dirname + '/public'),function (req,res) {
    console.log("hehe");
    res.end();
});*/

app.listen(3001);