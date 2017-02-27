/**
* fileName:node_fs01.js
* author:gamehu
* date:2017/2/27 15:56
* desc: nodejs内置的fs模块 用于操作文件
 * //运行不成功。。待续
*/
var fs=require("fs");

function copy(fromSrc,toSrc) {
    fs.writeFileSync(fromSrc,fs.readFileSync(toSrc));
}

function main(argv) {
    copy(argv[0],argv[1]);
}

main(process.argv.slice(2));