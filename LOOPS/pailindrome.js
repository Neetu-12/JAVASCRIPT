var char=require("readline-sync").question("enter the characters:-")
// var char="mom"
var i=-1
var s=""
while (i>=-char.length){
    s=s+char[char.length+(i)]
    i--
}
// console.log(s);
if(char==s){
    console.log("pailindrome");
}
else{
    console.log("not pailindrome");
}
