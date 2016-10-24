/**
 * Created by Administrator on 2016/8/31.
 */
var http = require('http');//引入http模块
var fs = require('fs');

var server=http.createServer();//创建一个http服务器
server.on("request",function(req,res){
    if(req.url=="/"||req.url=="/index.html"){
       var data=fs.readFileSync("./index.html","utf8");
        res.write(data);
        res.end();//响应结束
    }
});
server.listen(8888);