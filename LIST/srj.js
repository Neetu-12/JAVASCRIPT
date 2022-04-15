// var a=require("readline-sync").question("enter stone, paper,scissor:-")
// var com=require("readline-sync").question("enter stone, paper,scissor")

// var input = require('prompt-sync')();
// var a= input("enter your no:-")
// console.log(a);

// var input=require("readline-sync")
// var a=input.question("enter your no:-")
// console.log(a);


// var arr=[2,1,2,3,2,12,23]
// arr.splice(arr.indexOf(1),1,5)
// console.log(arr);

// var arr=[28,1,2,3,2,12,23,2]
// var i=0
// var m=0
// while(i<arr.length){
//     if (arr[i]>m){
//         m=arr[i]
//     }
//     i++
// }
// // console.log(m);
// var min=m
// var j=0
// while(j<arr.length){
//     if(arr[j]<min){
//         min=arr[j]
//     }
//     j++
// }
// console.log(min);

var arr=[1,2,2,12,2]
var c=0
var d=0
for (let a=0;a<arr.length;a++){
    c=arr[a]
    for(let b=a;b<arr.length;b++){
        if(c<arr[b]){
            c=arr[b]
            d=b
        }
arr.splice(d,1,arr[a])
arr.splice(a,1,c)
}
console.log(arr);
}