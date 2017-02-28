/**
 * fileName:utils01.js
 * author:gamehu
 * date:2017/2/28 15:14
 * desc:util工具的inherits实现继承
*/
var util = require('util');
function Base() {
    //内部的不能被继承
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
//可供继承的函数
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
//对象转化为字符串
console.log(util.inspect(objBase,true));
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
