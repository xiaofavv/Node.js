/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");

/*
 //空目录的删除   fs.rmdir(path,callback);
 fs.rmdir("./temp",function(err){
     if(err){
        console.info(err);
     }else{
         console.info("目录删除成功...");
     }
 });

 //文件的删除
 fs.unlink("./test.txt",function(err){
     if(err){
        console.info(err);
     }else{
         console.info("文件删除成功...");
     }
 });
 */

//任意删除文件或目录
function del(path){
    var stats=fs.lstatSync(path);
    if(stats.isDirectory()){//是一个目录的话
        //获取当前目录下的所有文件和子目录
        var files=fs.readdirSync(path);
        for(var i=0;i<files.length;i++){
            del(path+"/"+files[i]);
        }
    }else if(stats.isFile()){
       fs.unlinkSync(path);
    }
}
del("./test");
console.info("删除完成...");