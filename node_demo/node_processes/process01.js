
/**
 * fileName:process01.js
 * author:gamehu
 * date:2017/2/28 17:27
 * desc:nodejs子进程演示,作用待续
*/
const fs = require('fs');
const child_process = require('child_process');
/*

for(var i=0; i<3; i++) {
    //exec执行进程命令
    var workerProcess = child_process.exec('node child_process.js '+i,
        function (error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}*/


//新建多个子进程，异步执行
for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['child_process.js', i]);

    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}