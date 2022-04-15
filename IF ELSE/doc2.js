var num1=require("readline-sync").questionInt("enter the no1:-")
var num2=require("readline-sync").questionInt("enter the no:2-")
var num3=require("readline-sync").questionInt("enter the no:2-")
if (num1>num2 && num1>num3){
    console.log("num1 is greater")
}
else if(num2>num1 && num2>num3){
    console.log("num2 is greater")
}
else if(num3>num2 && num3>num1){
    console.log("num3 is greater")
}
else{
    console.log("all are eaqual")
}