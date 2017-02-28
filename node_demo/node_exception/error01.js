/**
 * fileName:error01.js
 * author:gamehu
 * date:2017/2/28 15:47
 * desc:try catch
*/

function error01() {
/*    try {

        var a=10;
        console.log(a+b);//抛出ReferenceError异常，未定义
    }catch (err){
        console.error(err);

    }*/
    var a=10;
    console.log(a+b);//抛出ReferenceError异常，未定义,如果不捕获则nodejs进程退出服务停止（同步异常）
}

function error02() {

        console.log("sss");//抛出ReferenceError异常，未定义


}
//调用
error01();
error02();