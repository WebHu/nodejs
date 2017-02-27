/**
* fileName:express.export.js
* author:gamehu
* date:2017/2/27 10:43
* desc: exports
*/
//绝对路径的写法(windows)，不用用/开头
//var h=require("E:/nodejs_workspace/express01/node_demo/express_head.js");
//var h=require("E:/nodejs_workspace/express01/node_demo"); 以包的形式导入，前提是需要在package.json设置主文件
var h=require("../node_demo");
var app=h.app;
var r=require("./express_Router01.js");
//router挂载到/exp路由下，所以如果访问express_Router01路由，则需要在前面加上/exp。比如访问express_Router01的get('/r')。需要子啊浏览器输入/exp/r
app.use('/exp',r);
//名字可改req1，rep1
app.use('/',function (req1,rep1) {
    console.log("改了啊");
})
app.listen(4000);