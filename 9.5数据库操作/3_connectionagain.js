/**
 * Created by Administrator on 2016/9/5.
 */
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"127.0.0.1", //指定服务器所在地址，默认为localhost
    port:3306,          //指定服务器的端口号
    database:'stusys',//需要连接的mysql数据库名
    user:'root',       //指定连接mysql数据库时使用的用户名
    password:"aaaa"  //连接mysql数据库的密码
});

function getConnect(){
    connection.connect(function (err) {
       if(err){
           console.info("数据库连接失败...");
       } else{
           console.info("数据库连接成功...");
       }
    });
}

connection.on("error", function (err) {
    if(err.code==="PROTOCOL_CONNECTION_LOST"){
        console.info("与mysql数据库连接被断开...");
    }else{
        console.info(err);
        throw err;//抛出错误
    }
});

getConnect();