/**
 * Created by Administrator on 2017/2/24.
 * 测试express的路由
 */
var express = require('express');

var app = express();
var router = express.Router();
//　结论：app.get挂载‘/’的路由只响应跟'/'精确匹配的GET请求。
router.get('/', function(req, res,next){
    console.log('test3');
    //next();
});
//app.get挂载‘/’的路由只响应跟'/'精确匹配的GET请求。 当输入localhost:4000 时输出test1
app.get('/', function(req, res,next){
    console.log('test1');
    next();
});
// 而app.use挂载的'/'的路由响应所有以'/' 为起始路由的路由，且不限制HTTP访问的方法。只要是以"/"起始的路由都会输出test02.比如：localhost:4000/hello
app.use('/', function(req, res,next){
    console.log('test2');
    next();
});



app.listen(4000);


/*
var express = require('express');
var app = express();
var router = express.Router();

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();//继续往下执行匹配的方法
});

// this will only be invoked if the path ends in /bar
router.use('/bar', function(req, res, next) {
    // ... maybe some additional /bar logging ...
    res.send('there is bar！');
    next();
});

// always invoked
router.use(function(req, res, next) {
  //  res.send('Hello World 程序猿哥哥！');
    console.log("嘿嘿");
});
//app.use('/foo',router)不能省略,router的路由必须通过app.use和app.verbs 挂载到app上才能被响应。所以上述代码，只有在app捕捉到 /foo路径上的路由时，才能router中定义的路由，虽然router中有针对 '/' 的路由，但是被app中的路由给覆盖了。

app.use('/foo', router);
//修改后必须重启，因为是服务端执行的。。
app.listen(4000);*/
