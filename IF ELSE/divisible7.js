var num2=require("readline-sync").questionInt("enter the no:-")
var num1=require("readline-sync").questionInt("enter the no:-")
if(num2>1500 && num2<=2700){
    if(num1%7==0 && num1%5==0){
        console.log("divisible of 7 and multiple of 5");
    }
    else{
        console.log("not divisible of 7 and multiple of 5");
    }

}
else{
    console.log("not lie bt them");
}