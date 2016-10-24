/**
 * Created by Administrator on 2016/9/7.
 */
var connection=require("./1_connection.js").conn;//获取数据库的连接

connection.connect(function (err) {
    if(err){
        console.info("连接数据库失败...");
    }else{
        //因为stuInfo表中有cid列，classInfo表中也有cid列，所以当返回结果时，同名的列会出现覆盖
        //connection.query("select * from stuInfo s,classInfo c where s.cid=c.cid", function (err,result) {

        //第一种方案：将同名列重命名
        //connection.query("select s.*,c.cid classInfo,cname,status from stuInfo s,classInfo c where s.cid=c.cid",function (err,result) {

        ///第二种方案：在每个表中的数据按表名或别名分开显示
        //connection.query({sql:"select * from stuInfo s,classInfo c where s.cid=c.cid",nestTables:true}, function (err,result) {


        //第三种方案：在每个字段前面加上所属表的名称或别名
        connection.query({sql:"select * from stuInfo s,classInfo c where s.cid=c.cid",nestTable:"_"}, function (err,result) {
          if(err){
              console.info("查询学生信息失败..."+err);
          }else{
              console.info(result);
          }
            connection.end();
        });
    }
});