const angle1=require("readline-sync").questionInt("enter the angles:-")
let angle2=require("readline-sync").questionInt("enter the angles:-")
var angle3=require("readline-sync").questionInt("enter the angles:-")
var sum=angle1+angle2+angle3
if (sum==180){
    console.log("valid triangle")
}
else{
    console.log("Invalid");
}