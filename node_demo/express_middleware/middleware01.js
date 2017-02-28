/**
 * fileName:middleware01.js
 * author:gamehu
 * date:2017/2/28 17:51
 * desc:中间件的应用
 *
*/
var express = require('express');
var app = express();

// 中间件 01，middle01 中间件的作用是，会为每个req请求添加一个 siteName属性，调用next() 方法表示继续，如果不调用，浏览器就没有反应一直处于请求当中。
function middle01(req,res,next){
    req.siteName = "中间件.....";
    console.log("xxxx");
    next();
}


// 中间件 02,middle02 中间件有一点绕，它本身不是中间件实体，当执行它时，会return一个中间件函数，属于一个闭包，它的作用是每次有请求时，都会给req请求对象加入一个 accessNum 属性，这个属性每次都会 ＋1 。
function middle02(){
    var accessNum = 0;
    return function(req,res,next){
        accessNum += 1;
        req.accessNum = accessNum;
        next();
    }
}
//插入中间件，中间件通常是在实在请求之后响应之前
app.use(middle01);
app.use(middle02());

app.get("/",function(req,res){
    console.log("gg");
    res.send(req.siteName + "\n" + "网站访问人数：" + req.accessNum);

})

app.listen(3000);
