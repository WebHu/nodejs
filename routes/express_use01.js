/**
 * Created by Administrator on 2017/2/24.
 * 中间件，
 */
//引入express_head头文件，类似html的head_html。。
var h=require("./express_head");
var app=h.app;
var router = h.router;
/*app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
})*/
//app.verbs（get、post等）挂载属于精确匹配，只会匹配/haha
app.get('/haha',function (req, res, next) {
    console.log('haha:%s');
    next();
})
//app.use挂载的'/'的路由响应所有以'/' 为起始路由的路由，且不限制HTTP访问的方法。
app.use('/hello',function (req, res, next) {
    console.log('hello');
   next();
})







app.listen(4000);