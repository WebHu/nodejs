/**
 * fileName:stream02.js
 * author:gamehu
 * date:2017/2/28 13:56
 * desc:写入流
*/
var fs = require("fs");
var data = 'this 【表情】 is good！';

// 创建一个可以写入的流，写入到文件 output.txt 中，如果不存在该文件 将会在当前目录新建一个
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾,记得关闭
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");