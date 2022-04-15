var num1=require("readline-sync").questionInt("enter the no1:-")
var num2=require("readline-sync").questionInt("enter the no:2-")
if (num1>num2){
    console.log("num1 is greater")
}
else if(num2>num1){
    console.log("num2 is greater")
}
else{
    console.log("both are equal")
}