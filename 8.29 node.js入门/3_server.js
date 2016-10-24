/**
 * Created by Administrator on 2016/8/29.
 */
/*
 var http = require('http');//引入http模块  <script src=''></script>
 //创建一个服务器
 http.createServer(function (request, response) {
 //客户端发送给服务器的信息被封装在request对象，即，服务器要获取客户端的信息，必须通过request这个对象
 //服务器向客户端回送信息，通过response对象

 //console.info(request);
 //console.info(response);

 //服务器向客户端发送响应数据 "Hello World"
 response.write('Hello World Hello 小法');
 response.end();//响应结束
 //}).listen(6666,'127.0.0.1');//制定服务器监听的ip地址和端口号，如果监听所有地址，则ip可以省略
 }).listen(6666);
 // 终端打印如下信息
 console.log('服务器已经启动，占用的端口号为：6666');
*/




var http = require('http');//引入http模块
var server=http.createServer();//创建一个http服务器
//通过on对同一个事件绑定多个事件处理函数
server.on("request",function(req,res){
    console.info(req.url);
    res.write("<meta charset='UTF-8'/>");
    res.write("谢谢访问");
    res.end();//响应结束
});
server.listen(6666);