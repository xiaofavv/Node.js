/**
 * Created by Administrator on 2016/9/13.
 */
var app=require("express")();
//使用路由功能
//app.get("/index.html/:id(\\d+)/:name?",function(req,res){//在路由中使用正则
app.get("/index.html/:id/:name",function(req,res){
    console.info(req);
    var str="";
    for(var key in req.param){
        if(str!=""){
            str+="<br />"
        }
        str+="参数名："+key+"参数值："+req.params[key].toString();
    }
    res.send(str);//将用户提交的数据返回给用户
});

app.listen(6868,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...")
    }
})