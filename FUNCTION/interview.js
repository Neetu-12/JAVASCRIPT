// var a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
// const data=(array)=>{
//     const obj={};
//     a.forEach(item=>{
//         if(obj[item]){
//             obj[item]++;
//         }else{
//             obj[item]=1;
//         }
//     });
//     return obj;
// }
// console.log(data(a))


// function splitString(str) {
//     var array = [] 
//     var string = '' 
//     count=0            
//     for(var i = 0; i<=str.length;i++){ 
//         if(str[i] !== ' '){            
//           string += str[i]       
//         } 
//         else{                       
//           array.push(string)
//           string = ""
//           count++             
//         }
//     }
//     console.log (array)
//     console.log("count is","=",count)         
// }
// splitString("so in which we have to use higher order function")

// var array=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
// var dict = {};
// array.map((currentValue, index)=>{
//     var count = 0;
//     array.map((newValue, index)=>{
//         if (currentValue == newValue){
//             count += 1
//         }
//         dict[currentValue]=count
//     })
// })
// console.log(dict);


// var str="so in which we have to use higher order function"
// var spaces=''
// count=1
// for(var i=1;i<str.length;i++){
//     if (str[i]==' '){
//     count=count+1
//     }
// }
// console.log(count)



// var a=[1,2,[54,[5,4,[6,7]]]] //fat array....

// const a=[1,2,[54,[5,4,[6,7]]]]
// const num = a.flat(Infinity);

// console.log(num);


// // by Neetu.....!!!
// var str=['dog','dog','dog','cow','cow','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
// r={}
// count=0
// var a=str.forEach((e)=>{
//     if(e in r) {
//         count+=1
//     }
//     else{
//         count=1
//     }
//     r[e]=count
// })
// console.log(r);

// by Neetu....!!!
// var str="so in which we have to use higher order function"
// b=str.split(" ")
// c=b.map((e)=>{
// return e

// })
// console.log(c.length);

var a=12
a++
++a
console.log(a);