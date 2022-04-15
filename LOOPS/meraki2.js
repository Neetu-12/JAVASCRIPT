// take input 3 and find out the ouput by following the code line by line
const num=require("readline-sync").questionInt("enter number: ");
let i=1
var count=0;
while (i<=10){      
    if (10%i===0) {
       count=count+1
       }
    i++;
}
if (count===2) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}

// prime 1 to 100....
// i=1
// while(i<=100){
//     j=1
//     c=0
//     while(j<=i){
//         if(i%j==0){
//             c=c+1
//         }
//         j=j+1
//     }
//     if(c==2){
//         console.log(i);
//     }
//     i=i+1
// }
