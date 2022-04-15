// var n=require("readline-sync").questionInt("enter no:-")
var i=1
while(i<=20){
    if(i%7==0 && i%3==0){
        console.log("navgurukul");
    }
    if(i%7==0){
        console.log("gurukul");
    }
    if(i%3==0){
        console.log("nav");
    }
    else{
        console.log(i);
    }
    i=i+1
}