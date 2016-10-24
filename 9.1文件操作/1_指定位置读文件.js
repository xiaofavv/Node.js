/**
 * Created by Administrator on 2016/9/1.
 */
/*
    fs.read(fd,buffer,offset,length,position,callback);
        fd:必须为open方法所使用的回调函数中返回的文件描述或openSync方法返回的文件描述
        buffer:为一个Buffer对象，英语指定将文件数据读取到哪个缓冲区中
        offset:指定向缓冲区中写入数据时的开始位置
        length:指定从文件中读取的字节数
        position:指定读取文件时的开始位置
        callback:function(err,bytesRead,buffer){}

        fs.open()
        第二个参数flag是指以什么方式打开  r:读的方式  w:写的方式  a：追加的方式
        回调函数中，fd就是打开这个文件的一个引用
 */
var fs=require("fs");
//异步
/*
fs.open("./yc.txt","r",function(err,fd){
   if(err){
       console.info("读取文件失败...");
   }else{
       var buffer=new Buffer(255);
       //               bt:就是实际读到的字节数    bf：读到的数据
       fs.read(fd,buffer,0,12,0,function(err,len,bf){
           console.info(buffer.toString());
           console.info(len);
           console.info(bf.slice(0,len).toString());
       });
   }
});
*/

//同步方式
var fd=fs.openSync("./yc.txt","r");
var buf=new Buffer(100);
var len=fs.readSync(fd,buf,0,12);
console.info(buf.slice(0,len).toString());//小法同学
len=fs.readSync(fd,buf,12,12,null);
console.info(buf.slice(0,24).toString());//小法同学早上好