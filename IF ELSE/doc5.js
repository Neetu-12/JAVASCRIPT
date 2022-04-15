// 1st method
var num=require("readline-sync").questionInt("enter the no:-")
var a=Math.floor(num/2)
var b=num/2
var d=a+b
if(num==d){
    console.log("even no.")
}
else{
    console.log("odd no.")
}

// 2nd method
var num=require("readline-sync").questionInt("enter the no.:-")
if (num%2==0){
    console.log("even no.")
}
else{
    console.log("odd no.")
}