//用全局变量process输出进程名称
console.log("进程 " + process.argv[2] + " 执行。" );

setTimeout(function () {
    console.log("sleep")
},1000);