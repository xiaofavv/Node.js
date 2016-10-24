/**
 * Created by Administrator on 2016/9/2.
 */
var http=require("http");
var querystring=require("querystring");
var fs=require("fs");
var url=require("url");

var server=http.createServer().listen(8888,"127.0.0.1",function() {
    console.info("服务器已经启动");
});
//当客户端请求时，触发这个事件
server.on("request",function(req,res){
    if(req.url!='/favicon.ico'){
        console.info(url.parse(req.url));//把请求地址变成一个对象
        if(req.url=="/"){               //默认返回index.html
            var file=fs.createReadStream("./index.html");
            file.on("data",function(data){
                res.write(data);
            });

            file.on("end",function(){
                res.end();
            })
        }

        //var urls=req.url;
        //urls=urls.replace("/?","");
        //var obj=querystring.parse(urls);
        ////console.info(obj);
        //console.info("用户名:"+obj.uname);
        //console.info("密码:"+obj.pwd);
        //res.end();
    }

});

server.on("close",function(){
    console.info("服务器被关闭");
})

server.on("error",function(err){
    console.info(err);
    if(err.code=="EADDRINUSE"){
        console.info("端口被占用。。");
    }
});

