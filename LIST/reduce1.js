// 1)))))
// var a=[2,3,2,1]
// var b=a.reduce(myfunc);
// console.log(b);
// function myfunc(total,value) {
//     return total+value;
// }


// 2)...........
// pahla variable for 1st element(2) and 2nd variable for last elemet(14)
var number = [2, 4, 6, 8, 12, 14];
// Normal Way
var sum = number.reduce(function(t,a){
   return t+a
})
console.log(sum);
