// enter name: kumar and tell us the what is the output will come
const n=require("readline-sync").question("enter the char:-");
var string=""
for (let i=-1;i>=-n.length;i--){
   string=string+n[n.length+(i)];
}
if (n===string) {
   console.log("it's palindrome string")
}
else {
   console.log("it's not a palindrome string")
}