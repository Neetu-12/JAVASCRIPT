var i=1
var l=[]
while(i<=3){
    var n2=require("readline-sync").questionInt("enter no2:-")
    l.push(n2)
    i=i+1
}
console.log(l);
var j=0
var max=0
while(j<l.length){
    if(l[j]>max){
        max=l[j]
    }
    j=j+1
}
console.log(max,"is max");



// var a=[232,34,35]
// var max=0
// var i=0
// while(i<a.length){
//     if(a[i]>max){
//         max=a[i]
//     }
//     i++
// }
// console.log(max);