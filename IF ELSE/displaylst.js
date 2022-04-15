// var num=require("readline-sync").questionInt("enter the no:-");
// var a=num%10;
// console.log("Last digit of number is ",a);

var num=require("readline-sync").questionInt("enter the no:-");
var a=num%10;
if (a%3==0){
    console.log(a,"divisible");
}
else{
    console.log("not divisible");
}


// num=int(input("Enter any number"))
// ld=num%10
// if ld%3==0:
//      print("Last digit of number is divisible by 3 ")
// else:
//      print("Last digit of number is not divisible by 3 ")