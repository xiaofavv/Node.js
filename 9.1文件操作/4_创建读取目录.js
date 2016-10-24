/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
/*
 //异步方式创建目录
 fs.mkdir("./test",function(err){
     if(err){
        console.info("目录创建失败...");
     }else{
         console.info("目录创建成功...");
     }
 })
 //同步方式创建目录
 fs.mkdir("./temp");
*/

//读取目录 异步
//fs.readdir("./",function(err,files){
//    if(err){
//        console.info("目录读取失败...");
//    }else{
//        console.info(files);//files指定目录下的所有文件或目录
//    }
//});
//同步
var fls=fs.readdirSync("./test");
console.info(fls);

