/**
 * Created by Administrator on 2016/9/20.
 */
//var app=require("express")();


var express=require("express");
var app=express();//通过express模块创建一个应用程序对象
//var querystring=require("querystring");

//static中间件
//app.use(express.static(__dirname));//指定这个应用程序使用express模块中的static中间件，并指定一当前服务器文件所在的目录为基址(app2.js)

app.get("/*",function(req,res){
    console.info(req.url+"============");
    res.sendfile(__dirname+req.url);//将用户提交的数据返回给用户

});

app.get("/userLogin",function(req,res){
    console.info(req.params); //获取请求里面的参数
    console.info(req.query); //获取请求中查询字符串，即请求数据

});


//可以尝试 随机生成端口号
app.listen(6868,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...")
    }
})