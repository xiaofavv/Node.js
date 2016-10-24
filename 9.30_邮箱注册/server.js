/**
 * Created by Administrator on 2016/9/30.
 */
var transporter=nodemailer.createtransport({
    host:"smtp.qq.com",
    secureConnection:false,
    port:465,
    auth:{
        user:"1281895998@qq.com",//开启SMTP的邮箱
        pass:"wxvhbjttkcyugcca"//授权码
    }
})

var range=function(start,end){
    var array=[];
    for(var i=start;i<end;i++) array.push(i);//for循环不打括号，就意味着值包括分号前面一段的循环
    return array;
}
var randomstr=range(0,5).map(function(x){
    return Math.floor(Math.random()*10);
}).join('');

console.info(randomstr);

app.post("/",function(req,res){
    res.sendfile(__dirname+"/register.html");
})

app.post("/getlma",function(req,res){


})























