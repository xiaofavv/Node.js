/**
 * Created by Administrator on 2016/9/21.
 */
var express=require("express");
var bodyparser=require("body-parser");
var session=require("express-session");

var app=express();//通过express模块创建一个应用程序对象
app.use(express.static(__dirname));//使用静态中间件
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({
    secret:"keyboard cat",//私密  session id的标识
    resave:true,//每次请求是否重新设置 session cookie
    saveUninitialized:true,//设置session cookie
}))

app.post("/userLogin",function(req,res){
    //if(req.body.uname=="yc" && req.body.pwd=="123"){
    //如果登录成功，则将数据存到session中
    session.uname=reg.body.uname;
    session.pwd=reg.body.pwd;
    //loginuname=reg.body.uname;
        res.end("1");//说明登录成功,则保存到cookie中
   // }else{
    //    res.send("0");//说明登录失败，则不保存到cookie中
   // }
});

app.get("/currentUserNname",function(req,res){
    res.send("当前登录用户:"+req.session.uname)
})


app.listen(8888,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...")
    }
});