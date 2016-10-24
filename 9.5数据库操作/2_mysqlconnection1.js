/**
 * Created by Administrator on 2016/9/5.
 */
var mysql=require("mysql");//导入mysql模块

//创建数据库链接
var connection=mysql.createConnection({
    host:"127.0.0.1", //指定服务器所在地址，默认为localhost
    port:3306,          //指定服务器的端口号
    database:'stusys',//需要连接的mysql数据库名
    user:'root',       //指定连接mysql数据库时使用的用户名
    password:"aaaa"  //连接mysql数据库的密码
});

//连接到数据库
connection.connect(function (err) {
    if(err){
        console.info("mysql数据库连接失败...");
    }else{
        console.info("mysql数据库连接成功...");

        connection.end(function(err){
            if(err){
                console.info("mysql数据库关闭失败...");
            }else {
                console.info("mysql数据库关闭成功...");
            }
        });
    }
});
