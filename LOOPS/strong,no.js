var n=require("readline-sync").questionInt("enter no.:-")
var sum=0
var t=n
while(n){
    var i=1
    var f=1
    var a=n%10
    while(i<=a){
        f=f*i
        i=i+1
    }
    sum=sum+f
    n=Math.floor(n/10)
}
if(sum==t){
    console.log("strong no.");
}
else{
    console.log("not a strong no.");
}