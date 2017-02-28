/**
 * fileName:events_test03.js
 * author:gamehu
 * date:2017/2/28 11:41
 * desc: 移除事件
*/
var EventEmitter=require('events').EventEmitter
var life=new EventEmitter();
//comfort  求安慰，函数名；
//fondness 求溺爱，函数名；
//官方建议，事件监听的最大数量不要超过10个，太多的话可能会导致内存的泄漏，当然这个值是可以修改的，通过setMaxListeners()方法修改；
life.setMaxListeners(3)
life.on('comfort',function(who){//监听，求安慰，
    console.log('给'+who+'倒水！');
})
life.on('comfort',function(who){//监听，求安慰，
    console.log('给'+who+'揉肩');
})
life.on('comfort',zuofan);
function zuofan(who){
    console.log('给'+who+'做饭');
}
life.on('fondness',maiyifu);
life.on('fondness',jiaogongzi);
function maiyifu(who){
    console.log('给'+who+'买衣服');
  //  throw new Error("抛出异常了撒...");
}
function jiaogongzi(who){
    console.log('给'+who+'交工资');
}
//life.removeListener('comfort',zuofan); //移除事件;
life.emit('comfort','Gamehu')//调用事件
life.emit('fondness','Gamehu的wife')//调用事件
//console.log(life.emit('comfort','Gamehu'))//是否调用事件，返回true,false；
console.log('给Gamehu做的事情：'+life.listeners('comfort').length)//事件的个数；
console.log('给Gamehu的老婆做的事情：'+life.listeners('fondness').length)//事件的个数；

life.on("removeListener",function () {
    console.log("正在移除事件...")
    console.log('给Gamehu做的事情：'+life.listeners('comfort').length)//事件的个数；
});
//注意，监听事件可以传入匿名函数也可以传入实名函数，但是移除事件的时候，必须传入实名函数，传入匿名函数没有效果；
//life.removeListener('comfort',function(){}); //移除事件;匿名函数

life.removeListener('comfort',zuofan); //移除事件;匿名函数

console.log('给老公做的事情：'+life.listeners('comfort').length)//事件的个数；

/*没用
life.on('error',function (err) {
    console.error(err);
});*/
