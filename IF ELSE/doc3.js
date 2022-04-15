var num=require("readline-sync").questionInt("enter the no:")
if (num>0){
    console.log("positive no");
}
else if(num<0){
    console.log("negative no.");
}
else{
    console.log("zero");
}