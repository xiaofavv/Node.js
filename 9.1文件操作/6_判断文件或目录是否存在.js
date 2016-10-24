/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//fs.exists(path,callback);判断文件或目录是否存在
fs.exists("./yc.txt",function(exists){
    console.info(exists);//true
})

//fs.realpath(path,[cache],callback);//获取文件或目录的绝对路径
//cache：一个对象，其中存放一些预定指定的路径
fs.realpath("./yc.txt",function(err,path){
    if(!err){
        console.info(path);//输出指定文件的绝对路径
    }
})

