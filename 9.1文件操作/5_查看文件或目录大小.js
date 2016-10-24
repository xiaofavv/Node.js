/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//查看文件大小信息
//fs.stat(path,callback)
/*
 fs.stat("./yc.txt",function(err,stats){
     if(err){
        console.info("出错啦...");
     }else{
         console.info("文件大小："+stats.size);
     }
     console.info(stats.isFile());//判断他是否是一个文件
     console.info(stats.isDirectory());//判断他是否是一个目录
 });
*/

//查看文件夹大小信息
var total=0;
function getSize(path){
    var stats=fs.statSync(path);
    if(stats.isDirectory()){//是一个目录的话
        //获取当前目录下的所有文件和子目录
        var files=fs.readdirSync(path);
        for(var i=0;i<files.length;i++){
            getSize(path+"/"+files[i]);
        }
    }else if(stats.isFile()){
        total+=stats.size;
    }
}
getSize("./yc");
console.info("总大小："+total);