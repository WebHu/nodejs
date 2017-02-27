/**
* fileName:express_Router01.js
* author:gamehu
* date:2017/2/27 10:22
* desc: express.Router([options])
 用于创建一个新的路由对象，var router = express.Router([options]);
 caseSensitive(默认是false)：表示是否大小写敏感
 mergeParams(defalut为false)：保存来自于上一个路由的req.params的值，如果当前路由的值和上一个路由的值冲突那么会覆盖上一个路由的值
 strict(默认为false):开启严格的路由。默认情况下/foo和/foo/是一致的
*/

var express=require("express");
//true表示大小写敏感
var router=express.Router({"caseSensitive":true});

router.get('/r',function (req,res) {
    console.log("kkk");
})
module.exports=router;


