// var a=['8','hey','hum']
// a.map(function(i,index){
//     console.log(index,i);
// })

// ye bhi ek ek value ko excess kr k deta h
var a=[1,2,3,4]
var b=a.map(test)
function test(i){
    return i*10
}
console.log(b);
