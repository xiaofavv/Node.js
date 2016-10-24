/**
 * Created by Administrator on 2016/8/29.
 */
outter:for(var i=1;i<10;i++){
    for(var j=1;j<5;j++){
        if(i*j==15){
            break outter;
        }
        console.info(i+"    "+j);
    }
    console.info(i+"...");
}
//当i*j！=15的时候，一直输出(i+"    "+j)，(i+"...")，直到i*j=15直接结束