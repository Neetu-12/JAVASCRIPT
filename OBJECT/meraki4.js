// dic1={1:10, 2:20}
// dic2={3:30, 2:40}
// dic3={5:50,6:60}
// r={}
// for(i in dic1){
//             if(i in dic2){
//                 r[i]=dic1[i]+dic2[i]
//             }
//             else if(i in dic2 && dic3){
//                 r[i]=dic1[i]+dic2[i]+dic3[i]
//             }
//             else{
               
//             }
//     }
// console.log(r);
// // {1: 10, 2: 60, 3: 30, 5: 50, 6: 60}


dic1={1:10, 2:20}
dic2={3:30,2:40}
dic3={5:50,6:60}
dic4={}
for (i in dic1)
    if (i in dic2)
        dic2[i]=dic2[i]+dic1[i]
    dic4=Object.assign(dic1,dic2,dic3)
console.log(dic4);