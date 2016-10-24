/**
 * Created by Administrator on 2016/8/31.
 */
var fs=require("fs");
/*
    读文件：
    fs.readerFile(file,options,callback(回调函数)；
    fs.readerFileSync(file,options)；

    写文件：
    fs.writeFile(fileName,data,[options],callback);
    fs.readerFileSync(fileName,data,[options]);

    第一个参数是要写入文件的路径和名称
    第二个参数是要写入的数据
    第三个参数是写入数据时的一些参数信息，该项可选
        options:参数为一个对象
            flag属性：用于指定以什么方式操作，默认是w
            mode属性：用于指定文件被打开时的读取权限，默认是0666（可读写）
                    使用4歌数据表示mode属性的值，其中第一个数字必须是0
                    第二个是指定文件或目录所有者的权限
                    第三个是指定文件或目录所有者所属组的其他成员的权限
                    第四个是指定跟文件或目录所有者不在同一个组的其他用户的权限
                    1，执行权限：001
                    2，写权限：  010
                    4，读权限：  100
                encoding属性：指定编码集，可选项有：utf8 ascⅡ base64
    第四个参数是回调函数

fs.writeFile("./yc.txt","utf-8",function(err){
    if(err){
        console.info("写入文件失败...");
    }else{
        console.info("写入文件完成...");
    }
})
 */

//异步方式
fs.readFile("./yc.txt","utf-8",function(err,data){
    if(err){
        console.info("写入文件失败...");
    }else{
        console.info(data);
    }
});
console.info("结束...");

//同步方式
//var data=fs.readFileSync("./7_compare.js","utf-8");
//console.info(data);



