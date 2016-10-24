/**
 * Created by Administrator on 2016/8/31.
 */
//fs.appendFlile(file,data,options,callback)
//异步
var fs=require("fs");
fs.appendFile("./yc.txt","\r\n这是后面添加的数据",{encoding:"utf-8"},function(err){
    if(err){
        console.info("出错啦...");
    }else{
        console.info("文件追加完成...");
        console.info(fs.readFileSync("/yc.txt").toString());
    }
});
//同步
fs.appendFileSync("./yc.txt","\r\n这是同步追加的数据...");