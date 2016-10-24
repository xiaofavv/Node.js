/**
 * Created by Administrator on 2016/9/6.
 */
var connection=require("./6_connection.js").conn;//获取数据库的连接

connection.connect(function(err,result){
    if(err){
        console.info("数据库连接失败...");
    }else{
        insertData();//如果连接成功，则添加数据
    }
})

function insertData(){
    //一次性添加多条数据
    var sqlStr="";
    for(var i=1;i<=4;i++){
        sqlStr+="insert into stuInfo values(0,'法法_"+i+"',1002,'女',"+(20+i)+",'aaaa','11011011011"+i+"');";
    }
    console.info(sqlStr);
    connection.query(sqlStr, function (err) {
        if(err){
            console.info("学生信息更新失败..."+err);
            connection.end();
        }else{
            delData();//如果成功，则删除
        }
    });
}

function delData(){
    connection.query("delete from stuInfo where sid>=?",[10005], function (err,result){
        if(err){
        console.info("学生信息删除失败...");
        connection.end();
    }else {
            findData();//如果成功，则查询数据
        }
    });
}

function findData(){
    connection.query("select * from stuInfo", function (err,result) {
        if(err){
            console.info("学生信息查询失败...");
            connection.end();
        }else{
            console.info(result);
            connection.end();
        }
    });
}














