/**
 * Created by Administrator on 2016/9/4.
 */
var http=require("http");

var options={
    host:"www.baidu.com",
    post:80,
    path:"/index.html",
    method:"GET"
}
var req=http.request(options,function(res){
//var req=http.request("http://www.mogujie.com",function(res){
    console.info(res.statusCode);//获取响应码
    console.info(JSON.stringify(res.headers));//获取响应头信息并将其转换为一个json格式字符串
    res.on("data",function(data){
        console.info(data.toString());
    })
});

req.on("error",function(err){
      console.info(err);
})

req.end();