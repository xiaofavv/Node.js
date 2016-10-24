/**
 * Created by Administrator on 2016/8/30.
 */
var yc1=require("./8_模版缓存.js");
var yc2=require("./8_模版缓存.js");
//以上引用两次也只会显示一次，因为缓存的原因
//若想要显示多次，解决方法：
yc1.output();
yc2.output();