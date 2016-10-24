/**
 * Created by Administrator on 2016/8/31.
 */
var buf=new Buffer([0x10,0x20]);
console.info(buf.readUInt8(0));
console.info(buf.readUInt8(1));

buf.writeUInt8(30,0);
console.info(buf);

buf.writeUInt8(-1);
console.info(buf);
console.info(buf.readUInt8());
console.info(buf.readUInt8());

//源码：0000 0001 ->反码：1111 1110 ->补码 1111 1111