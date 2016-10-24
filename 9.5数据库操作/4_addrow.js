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

connection.connect( function (err) {
    if(err){
        console.info("数据库连接失败...");
    }else{
       connection.query("insert into classInfo set ?",{cid:0,cname:'YC20',status:1},function(err,result){
            if(err){
                console.info("班级信息添加失败...");
            }else{
                console.info("班级信息添加成功...");
                console.info(result.insertId);
            }
           connection.end();//关闭连接
        });
    }
});