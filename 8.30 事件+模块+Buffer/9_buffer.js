/**
 * Created by Administrator on 2016/8/30.
 */
//创建指定长度的buffer对象   缓冲
var buf=new Buffer(10);
buf.fill(10);//用10 去填充buf对象
console.info(buf.length);
console.info(buf);//所有的值都是16进制表示的

//创建指定值的buffer对象
var buf1=new Buffer([10,20,30,40,50]);
console.info(buf1.length);
console.info(buf1);//所有的值都是16进制表示的

//通过一个字符串来创建buffer对象，将自动执行字符串的输入和输出时的编码和解码的处理
//默认是UTF-8，支持以下编码：ascⅡ UTF-8 UTF16le  base64(图片) hex ucs2  binary(不推荐使用）
var buf2=new Buffer("veigar","UTF-8");
console.info(buf2.length);
console.info(buf2);//所有的值都是16进制表示的

var str="小法同学下午好";
var buf3=new Buffer(str);
console.info(str.length);//10
console.info(buf3.length);//30   一个UTF-8字符占用3个字节

//可以通过索引下标访问字符串对象或缓冲区中的数据，但是，在获取数据时，字符串对象是以文字作为一个单位的，而缓冲区对象以字节为单位的
console.info("--------------------");
console.info(str[2]); //同
console.info(buf2[2]);//105

//字符串对象一旦创建。将不能修改
str[1]=["居"];
console.info(str);//并没有修改

//buffer对象是可以被修改的，可以通过序号来修改其中的某个字节处的数据

console.info(buf3[3]);
console.info(buf3[4]);
console.info(buf3[5]);

buf3[0]=230;
buf3[1]=179;
buf3[2]=149;
console.info(buf3.toString());