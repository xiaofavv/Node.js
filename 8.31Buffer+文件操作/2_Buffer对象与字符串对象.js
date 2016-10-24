/**
 * Created by Administrator on 2016/8/31.
 */
//buf.toString([encoding],[start],[end])
var buf=new Buffer("小法同学早上好");
console.info(buf.toString("UTF-8",0,12));//小法同学
console.info(buf.toString("UTF-8",12));//早上好    从第12个字节一直到最后

//Buffer对象的write写法
//buf.write(string,[offset],[length],[encouding]);
var str="小法同学早上好";
var buf=new Buffer(str);
console.info(buf.toString());//小法同学早上好

//重写buf对象中的值
buf.write("lalala",0,6);
console.info(buf.toString());//lalala同学早上好