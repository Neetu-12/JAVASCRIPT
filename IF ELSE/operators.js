var num1=require("readline-sync").questionInt("enter no:-")
var num2=require("readline-sync").questionInt("enter no:-")
var optr=require("readline-sync").question("enter any operators:-")
if (optr=="+"|| optr=="-"|| optr=="*"|| optr=="%"|| optr=="**" ||optr=="/"){
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1**num2);
    console.log(num1/num2);
    console.log(num1%num2);    
    console.log(num1+num2);
}