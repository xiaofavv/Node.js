/**
 * Created by Administrator on 2016/8/30.
 */
var xf=require("./5_exports_1");//var yc=require("./5_exports_1.js");引用多次也只会显示一次，因为缓存
console.info(xf.test);
console.info(xf.a);
console.info(xf.b);//undefined  因为名字要与5_exports_1.js中的名字要符合
console.info(xf.txt);
