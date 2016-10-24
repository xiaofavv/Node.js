/**
 * Created by Administrator on 2016/8/29.
 */
//console.info(global);
/*
console.info(__dirname);    //执行的js文件所在的绝对目录
console.info(__filename);   //执行的js文件的绝对路径
*/

/*
//-------------------console用于提供控制台标准输出---------------------
//异步传输，看谁抢得到io资源，所以刷新位置会不一样
console.log(" This is a log");//打印日志

console.info(" This is a info");//打印信息

console.error(" This is a error");//打印错误

console.warn(" This is a warn");//打印警告

//当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
console.trace("This is a trace");

console.time("test"); //计时开始，所要检测的代码，计时结束
for(var i=0;i<100;i++){

}
console.timeEnd("test");
*/

//-----------------process是一个全局变量,它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
/*
process.stdout.write("This is stdout");//标准输出流。
process.stderr.write("This is stderr");//标准错误流。
*/

/*
 process.stdout.write("请输入：");
 process.stdin.setEncoding("UTF-8");//设置编码集
 process.stdin.on("data",function(data){//当有信息可以读取时触发，此时调用函数中没有参数
 console.info(data);//读取用户的输入
 });

process.stdout.write("请输入：");
process.stdin.setEncoding("UTF-8");//设置编码集
process.stdin.on("readable",function(data){//当有信息可以读取时触发，此时调用函数中没有参数
    console.info(process.stdin.read());//读取用户的输入
});
*/