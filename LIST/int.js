// a=[1,2,3,4]
// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log("...............");

// var a=[1,2,3,4]
// for (i in a){
//     i++
//     console.log(a[i]);
// }
// console.log("..........");

// var a=[1,2,3,4]
// for(i of a){
//     console.log(i);
//     i++
// }
// console.log("..........");

// var a=[1,2,3,4]
// var i=0
// while (i<a.length) {
//     console.log(a[i]);
//     i++
// }
// console.log(".......");

// i=0
// a=[1,3,4,5]
// do{
//     // console.log(a[i]);
//     if(a[i]==a[2]){
//         // i++
//         break
//     }
//     console.log(a[i]);

//     i++
// }
// while (i<a.length){
// }


// var input = require('prompt-sync')();
// var a= input("enter your no:-")
// console.log(a);

var b=require("readline-sync").question("enter no:-")
var i=-1
var s=""
while (i>=-b.length) {
    s=s+b[b.length+(i)]
    i--
}
if(b===s){
    console.log("pallindrome");
}
else{
    console.log("not pallindrome");
}