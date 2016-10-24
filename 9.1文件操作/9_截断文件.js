/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//截断文件   修改文件大小
fs.truncate("./yc.txt",12,function(err){//只保留文件的前12个字节
    if(err){
        console.info(err);
    }else{
        console.info("文件截断成功...");
    }
});

//监视文件   fs.watchFile(file,options,listener)
//options是一个整形