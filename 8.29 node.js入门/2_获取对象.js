/**
 * Created by Administrator on 2016/8/29.
 */
var req={
    session:{
        user:{
            uname:'HLY',
            age:'18'
        }
    }
}

//第一种方式
console.info(req.session.user.uname);
console.info(req.session.user.age);
//第二种方式
for(var attr in req.session.user){
    console.info(attr+":"+req.session.user[attr]);
}
//第三种方式
with(req.session.user){
    console.info(uname+"    "+age);
}