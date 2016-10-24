/**
 * Created by Administrator on 2016/8/30.
 */
var http = require('http');//引入http模块
var server=http.createServer();//创建一个http服务器

var testFun=function(req,res) {
    if(req.url!="/favicon.ico"){
        console.info("接收到了客户端获取图标的信息...");
    }
};
server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){
        console.info("发送响应信息...");
        res.write("<!doctype html><head><title>小法</title><meta charset='UTF-8'/></head>");
        res.write("<body><h1>下午好啊，小法同学</h1></body>");
        res.end();//响应结束
    }
});
server.once("request",function(req,res) {
    if(req.url!="/favicon.ico"){
        console.info("发送响应完毕...");
    }
});
server.on("request",testFun);
//server.removeListener("request",testFun);//移除request上的testFun事件处理函数
server.listen(8888);