/**
 * Created by Administrator on 2016/8/31.
 */
var buf1=new Buffer("小法同学早上好");
console.info(buf1);

//将Buffer对象中保存的数据转化为字符串
var json=JSON.stringify(buf1);
var jsonObj=JSON.parse(json);//将JSON类型的字符串转为json对象
console.info(json);
console.info(json.data);//undefined
console.info(jsonObj.data);//这个时候就可以通过对象名，属性名取值