/**
 * Created by Administrator on 2016/8/31.
 */
var buf=new Buffer("小法同学早上好");
var copyBuf=new Buffer(40);
//第一个参数是将源数据复制到新对象
//第二个参数是从新对象的哪个位置开始存放复制过来的数据
//第三个参数是从源数据的哪个位置开始复制
//第四个参数是从源数据中复制的长度，默认是源数据的长度
buf.copy(copyBuf,0,0,12);
console.info(copyBuf.toString());

//Buffer对象的常用方法
//toString();//将Buffer对象中的数据，以字符串的方式输出
//isBuffer();//判断是否是一个Buffer对象
console.info(Buffer.isBuffer(buf));//true
var str="啊哈哈哈";
console.info(Buffer.isBuffer(str));//false  相当于 instaceof:判断类型

//byteLength();计算一个字符串的字节数
console.info(Buffer.byteLength(str,"UTF-8"));//6
console.info(Buffer.byteLength(str,"utf16le"));//4

//concat();拼接多个Buffer对象的值

//isEncoding();检查是否是一个有效编码
console.info(Buffer.isEncoding("UTF-8"));//true
console.info(Buffer.isEncoding("gbk"));//false

//length
console.info(copyBuf.length);//注意这是一个属性，而不是方法

//toJson() 转为json对象
var json=buf.toJSON();
console.info(json.type);

//buf1.equals(buf2);判断两个Buffer对象的值受否相等，如果相等则返回true，否则返回false

//buf1.compare(buf2);比较两个Buffer对象，但返回的是一个数字

//buf1.slice([start],[end]);截取Buffer对象中的一截

//buf.fill(value,[offset],[end]);填充


