var num=require("readline-sync").questionInt("enter no:-")
if(num>99 && num<=999){
    console.log("three digit no.");
}
else{
    console.log("not a three digit no.");
}