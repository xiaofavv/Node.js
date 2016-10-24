/**
 * Created by Administrator on 2016/9/1.
 */
/*
 fs.write(fd,buffer,offset,length,position,callback);
 fd:必须为open方法所使用的回调函数中返回的文件描述或openSync方法返回的文件描述
 buffer:要写入文件的缓存数据
 offset:指定向缓冲区中读取数据的开始位置
 length:要写入文件的数据长度
 position:写入文件的开始位置，以字节为单位
 callback:function(err,written,buffer){}
                   err
                   written
                   buffer


 */
var fs=require("fs");
var buf=new Buffer("啦啦啦");
fs.open("./yc.txt","a",function(err,fd){
    if(err){
        console.info("打开文件失败...");
    }else{
        fs.write(fd ,buf, 0, 6, 0,function(err,writeLen,buffer){
            if(err){
                console.info("写入文件失败...");
            }else{
                fs.write(fd ,buf, 0, 6, 0,function(err,writeLen,buffer) {
                    if (err) {
                        console.info("打开文件失败...");
                    }else{
                        console.info("文件写入完成...");
                    }
                })
            }
        });
    }
    fs.fsync(fd);//fs.fsyncsync(fd);  //异同步刷新缓存
    fs.close(fd);// fs,closeSync(fd); //关闭打开文件
});