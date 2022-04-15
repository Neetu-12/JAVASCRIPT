function char() {
var a='The quick Brow Fox'
c1=0
c2=0
for(i=0;i<a.length;i++){
    if(a[i]>"a" && a[i]<="z"){
        c1=c1+1
    }
    else if(a[i]>"A" && a[i]<="Z"){
        c2=c2+1
    }
}
console.log("lower case",c1);
console.log("upper case",c2);
}
char()