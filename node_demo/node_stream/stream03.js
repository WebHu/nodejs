/**
 * fileName:stream03.js
 * author:gamehu
 * date:2017/2/28 14:00
 * desc:管道流。。从写入流直接输送到写出流,还有链式流待有时间再尝试
*/
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('stream.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 stream.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

