// // Output :-([1, 4, 9, 16, 25], [676, 729, 784, 841, 900]).
// r1=[]
// for(i=1;i<=5;i++){
//     b=i**2
//     r1.push(b)
// }
// console.log(r1);

// r2=[]
// for(j=26;j<=30;j++){
//     c=j**2
//     r2.push(c)
// }
// console.log(r2);


var a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
const data=(array)=>{
    const obj={};
    a.forEach(item=>{
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item]=1;
        }
    });
    return obj;
}
console.log(data(a))