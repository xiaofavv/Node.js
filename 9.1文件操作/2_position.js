/**
 * Created by Administrator on 2016/9/1.
 */
/*
 fs.read(fd,buffer,offset,length,position,callback);
 position:参数值用于指定读取文件时的开始位置(以字节为单位)，如果该参数为null，
 将从文件的当前被读取的位置处(前一次读取时的开始位置+读取字节数)开始读取文件
 */
var fs=require("fs");

fs.open("./yc.txt","r",function(err,fd){
    if(err){
        console.info("读取文件失败...");
    }else{
        var buffer=new Buffer(255);
        //               bt:就是实际读到的字节数    bf：读到的数据
        fs.read(fd,buffer,0,12,0,function(err,len,bf){
            console.info(bf.slice(0,len).toString());
            fs.read(fd,buffer,12,12,null,function(err,len1,bf1){
                console.info(buffer.toString());
                console.info(bf1.slice(12,24).toString());
            });
        });
    }
});
