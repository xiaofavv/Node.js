/**
 * Created by Administrator on 2016/8/30.
 */
var yc=require("./7_模块定义成类");

var myyc=new yc();
console.info("获取公有属性name:"+myyc.name);
console.info("获取公有属性age:"+myyc.age);//我们在对象中并没有将此公有属性传递到模块外，所以获取不到

console.info(myyc.getName() );//undefined  因为我们在new 的时候并没有给定用户名和年龄

var myyc1=new yc("小法",18);
console.info(myyc1.getName() );
console.info(myyc1.getAge() );

myyc1.setAge(110);
console.info(myyc1.getAge() );

myyc1.setName("尹居居");
console.info(myyc1.getName() );

console.info(myyc1.toString());

//console.info();