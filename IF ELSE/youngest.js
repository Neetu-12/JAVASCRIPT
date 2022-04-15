var poeple1=require("readline-sync").questionInt("enter age:-")
var poeple2=require("readline-sync").questionInt("enter age:-")
var poeple3=require("readline-sync").questionInt("enter age:-")
if (poeple1<poeple2 && poeple1<poeple3){
    console.log("poeple1 is youngest");
}
else if (poeple2<poeple1 && poeple2<poeple3){
    console.log("poeple2 is youngest");
}

else if (poeple3<poeple1 && poeple3<poeple2){
    console.log("poeple3 is youngest");
}
else{
    console.log("all poeple are equal in age");
}