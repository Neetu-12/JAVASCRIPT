// var i=1
// var a=0
// while(i<=10){
//     var j=i
//     var sum=0
//     while(j>0){
//         a=j%10
//         sum=sum+a
//         j=Math.floor(j/10)
//     }
//     if(i%sum==0){
//         console.log(i,"harshad no.");
//     }
//     i=i+1
// }

// checked harshad no....
var n=require("readline-sync").questionInt("enter no:-")
var t=n
var rem=0
while(t!=0){
    a=t%10
    rem=rem+a
    t=Math.floor(t/10)
    // console.log(t)
}
if(n%rem==0){
    console.log("harshad no.");
}
else{
    console.log("not a harshad no.");
}