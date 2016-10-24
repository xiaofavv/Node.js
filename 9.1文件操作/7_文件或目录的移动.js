/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//文件或目录的移动 fs.rename(oldpath,newpath,callback);
fs.rename("./yc.txt","./yc/yc.txt",function(err){
    if(err){
        console.info("文件移动失败...");
    }else{
        console.info("文件移动成功...");
    }
});
