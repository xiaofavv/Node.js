/**
 * Created by Administrator on 2016/8/31.
 */
var buf=new Buffer("小法同学早上好");
var str=buf.slice(3,6);//一个汉字三个字节
console.info(str.toString());
console.info(buf.toString());

//修改通过slice()
str[0]=buf[0];
str[1]=buf[1];
str[2]=buf[2];

//此时buf对象的值也被修改了,由于Buffer对象的slice()方法并不是复制缓冲区中的数据，而是与该数据共享内存区域
//如果修改使用slice方法取出的数据，则缓存区中保存的数据也将被修改
console.info(buf.toString())