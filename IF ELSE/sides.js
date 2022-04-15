var side1=require("readline-sync").questionInt("enter the sides:-")
var side2=require("readline-sync").questionInt("enter the sides:-")
var side3=require("readline-sync").questionInt("enter the sidess:-")
if (side1==side2 && side1==side3 && side2==side1 && side2==side3 && side3==side1 && side3==side2){
    console.log("valid");
}
else{
    console.log("Invalid");
}