/**
 * Created by Administrator on 2016/8/30.
 */
var http = require('http');//引入http模块
var server=http.createServer();//创建一个http服务器

server.on("ycEvent",function(arg1,arg2,arg3){
    console.info("自定义事件...");
    console.info(arg1+arg2+arg3);
})
server.emit("ycEvent",10,20,30);
server.listen(8888);