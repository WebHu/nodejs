#EventEmitter属性介绍
>##方法
序号	方法 & 描述
1.	addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部。
2.	on(event, listener) 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
    server.on('connection', function (stream) {
      console.log('someone connected!');
    });
3.	once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    server.once('connection', function (stream) {
      console.log('Ah, we have our first user!');
    });
4.	removeListener(event, listener) 移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
    var callback = function(stream) {
      console.log('someone connected!');
    };
    server.on('connection', callback);
    // ...
    server.removeListener('connection', callback);
5.	removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
6.	setMaxListeners(n) 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
7.	listeners(event)    返回指定事件的监听器数组。
8.	emit(event, [arg1], [arg2], [...])  按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

>##类方法

序号	方法 & 描述
1.	listenerCount(emitter, event)   返回指定事件的监听器数量。

>##事件

序号	事件 & 描述
1.	*newListener* event - 字符串，事件名称    listener - 处理事件函数,该事件在添加新监听器时被触发。
2.	*removeListener*    event - 字符串，事件名称    listener - 处理事件函数,从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
    life.on("removeListener",function () {
        console.log("正在移除事件...")
        console.log('给老公做的事情：'+life.listeners('comfort').length)//事件的个数；
    });

##error 事件

EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

*我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。*


##继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。