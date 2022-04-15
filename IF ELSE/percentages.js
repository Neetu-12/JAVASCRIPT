var physics=require("readline-sync").questionInt("eneter the no:-")
var chemistry=require("readline-sync").questionInt("eneter the no:-")
var biology=require("readline-sync").questionInt("eneter the no:-")
var mathematics=require("readline-sync").questionInt("eneter the no:-")
var computer=require("readline-sync").questionInt("eneter the no:-")
var percentages=physics+chemistry+biology+mathematics+computer/5
if (percentages>=90){
    console.log("grade A");
}
else if (percentages>=80){
    console.log("grade B");
}
else if (percentages>=70){
    console.log("grade C");
}
else if (percentages>=60){
    console.log("grade D");
}
else if (percentages>=40){
    console.log("grade E");
}
else if (percentages<=40){
    console.log("grade F");
}