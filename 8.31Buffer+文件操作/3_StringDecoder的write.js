/**
 * Created by Administrator on 2016/8/31.
 */
var StringDecoder=require("string_decoder").StringDecoder;
var buf=new Buffer("小法同学早上好");
console.info(buf);//21个字节

var decoder=new StringDecoder();//new StringDecoder([encoding]);
console.info(decoder.write(buf));//小法同学早上好

//我们将str存到两个Buffer对象中，第一个放10  第二个放11
var buf1=new Buffer([0xe5,0xb0,0x8f,0xe6,0xb3,0x95,0xe5,0x90,0x8c,0xe5]);
var buf2=new Buffer([0xad,0xa6,0xe6,0x97,0xa9,0xe4,0xb8,0x8a,0xe5,0xa5,0xbd]);
console.info(buf1.toString()+buf2.toString());//小法同���早上好  出现乱码
//如果分开存取的9，12(3的倍数)  则以上不会出现乱码

//将两个buffer对象合在一起
var str3=Buffer.concat([buf1,buf2]);
console.info(str3.toString());//虽然可以解决刚才的问题，但是若是多个字符串拼接也是需要时间的，所以这样会影响系统的性能

//此时我们可以直接使用StringDecoder对象中的write方法输出
console.info(decoder.write(buf1));
console.info(decoder.write(buf2));