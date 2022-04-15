// // INvoked function....
// var a=function num(b){
//     console.log(b+9);
// }
// (1)

// // anonymous funcion...
// var a=function(b){
//     console.log(b+8);
// }
// (7)

// var a=(n,m)=>console.log(n+m);
// a(2,3)

// var a=[2,3,1,3]
// a.forEach(function(i){
//     console.log(i);
// })

var a=[2,3,1,3]
a.map(function(i){
    return i*10
})
console.log(a);