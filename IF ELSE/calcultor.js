var num1=require("readline-sync").questionInt("enter no:-")
var num2=require("readline-sync").questionInt("enter no:-")
var optr=require("readline-sync").question("operataor no:-")

switch (optr) {
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
}
