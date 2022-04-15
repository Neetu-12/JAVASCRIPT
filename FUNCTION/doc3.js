// 1)......
// var a=Array(8, 2, 3, 0, 7)
// var s=0
// for(i=0;i<a.length;i++){
//     s=s+a[i]
// }
// console.log(s);

// // 2))))....
// var a=Array(8, 2, 3, 0, 7)
// var s=0
// for(i in a){
//     s=s+a[i]
// }
// console.log(s);

// 3)))..............
var a=Array(8, 2, 3, 0, 7)
var s=0
for(i of a){
    s=s+i
}
console.log(s);
