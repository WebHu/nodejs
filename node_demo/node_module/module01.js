/**
 * fileName:moudle01.js
 * author:gamehu
 * date:2017/2/28 14:09
 * desc:创建一个对象，通过moudle.exports导出对象
 */

function User(){
    //变量名不能相同，比如参数名不能与局部变量名相同
    var uname;
    this.setUname=function (uname1) {
        uname=uname1;
    }
    this.introduce=function () {
        console.log("my name is "+uname);
    }
}

module.exports=User;