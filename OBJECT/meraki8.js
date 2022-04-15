// var l1=['one','two','three','four','five']
// var l2=[1,2,3,4,5,]
// var r=[]
// for(i=0;i<l1.length;i++){
//     for(j=i;j<=i;j++){
//         r[l1[i]]=l2[j]
//     }
// }
// console.log(r);

let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);