/**
 * fileName:man.js
 * author:gamehu
 * date:2017/2/28 10:19
 * desc:异步（非阻塞）、同步（阻塞）编程
 * 因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
*/

/*同步方式
console.log('--------开始读取文件--------');

var fs= require('fs');
var data = fs.readFileSync('test.txt','utf-8');

console.log(data);

console.log('--------读取结束--------');*/

//异步方式
console.log('--------开始读取文件--------');

var fs= require('fs');
//通常回调函数可以有三种情况：1.没有参数 2.(error, result)形式的双参数 3.类型为函数的单参数
fs.readFile('test.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log('--------读取结束--------');
