var n=require("readline-sync").questionInt("enter no:-")
i=0
while(n!=0){
    a=n%10
    n=Math.floor(n/10)
    if(a==0){
        i=i+1
    }
}
if(i>=1){
    console.log("duck no.");
}
else{
    console.log("not a duck no.");
}