/**
 * Created by Administrator on 2017/2/24.
 * 中间件，
 */

var h=require("./express_head");
var app=h.app;
app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
})

app.listen(4000);