var a= "1234abcd"
var i=-1
var s=""
while(i>=-a.length){
    s=s+a[a.length+(i)]
    i=i-1
}
console.log(s);