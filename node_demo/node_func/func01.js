/**
 * fileName:func01.js
 * author:gamehu
 * date:2017/2/28 14:33
 * desc:nodejs的函数
*/
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}
//调用excute，say函数作为参数传到excute内部作为一个本地变量，即在excute中调用say
//execute(say, "Hello"); 调用实名函数

//调用匿名函数
execute(function (val) {
    console.log("hehe"+val);
}," 嘿嘿");