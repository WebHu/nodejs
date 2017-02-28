#nodejs的异常处理
    新版的nodejs，domain已经废弃，用Error


    ##处理异常的方式：
        1.  try catch，只能处理同步异常
        2.  异步回调处理异常，通过异步方法的回调函数都会有err这个参数
        3.  通过process.on("uncaughtException")捕获