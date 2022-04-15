// Q16.Print multiplication table of 12 using function.
var a=require("readline-sync").questionInt("enter no:-")
var i=1
while (i<=10) {
    console.log(a,"*",i,"=",i*a);
    i++
}