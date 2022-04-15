var assets=require("readline-sync").questionInt("enter your assets:-")//stocks
var liabilities=require("readline-sync").questionInt("enter liabilities:-")//for udhar
if (assets>=liabilities){
    console.log("profit");
}
else{
    console.log("loss");
}