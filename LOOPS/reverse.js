var n=require("readline-sync").questionInt("enter no:-")
var sum=0
while(n!=0){
    a=n%10
    sum=sum*10+a
    n=Math.floor(n/10)
}
// console.log(sum);

if(n===sum){
    console.log("revsrese");
}
else{
    console.log("not reverse");
}