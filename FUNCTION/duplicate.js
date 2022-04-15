function num(){
    var a=[1,2,3,3,3,3,4,5]
    var r=[]
    for (i=0;i<a.length;i++){
        if (!r.includes(a[i])){
            r.push(a[i])
        }
    }
    console.log(r);
}
num()
