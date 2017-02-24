/**
 * Created by Administrator on 2017/2/24.
 * 测试express的router 路由
 */
 var express = require('express');
 var app = express();
 var router = express.Router();

 // simple logger for this router's requests
 // all requests to this router will first hit this middleware 所有的请求

//router的路由相同，则按照顺序先后执行
router.use(function(req, res, next) {
 console.log('%s %s %s', req.method, req.url, req.path);
 next();//继续往下执行匹配的方法
 });

// always invoked
router.use(function (req, res, next) {
    //  res.send('Hello World 程序猿哥哥！');
    console.log("嘿嘿");
    next();
});

// this will only be invoked if the path ends in /bar ，只匹配/bar的请求
router.use('/bar', function (req, res, next) {
    // ... maybe some additional /bar logging ...
    res.send('there is bar！');
    next();
});


/*router可看作是app的微缩版，app和router对应着相同的请求路由，则先执行app的在执行router的。如果router配置的（app.use('/a', router);）
 路径跟app的路径不同则不会进入router，比如:这儿router是/a,但是app.get是'/'如果浏览器输入http://localhost:4000/则只会访问app.get不会访问router*/

app.get('/',function (req, res,next) {
    res.send("呵呵");
    next();
})
/*
response的方法
res.download() 	Prompt a file to be downloaded.
res.end() 	End the response process.
res.json() 	Send a JSON response.
res.jsonp() 	Send a JSON response with JSONP support.
res.redirect() 	Redirect a request.
res.render() 	Render a view template.
res.send() 	Send a response of various types.
res.sendFile() 	Send a file as an octet stream.
res.sendStatus() 	Set the response status code and send its string representation as the response body.*/



//app.use('/foo',router)不能省略,router的路由必须通过app.use和app.verbs 挂载到app上才能被响应。所以上述代码，
// 只有在app捕捉到 /foo路径上的路由时，才能router中定义的路由，虽然router中有针对 '/' 的路由，但是被app中的路由给覆盖了。

 app.use('/a', router);
 //修改后必须重启，因为是服务端执行的。。
 app.listen(4000);