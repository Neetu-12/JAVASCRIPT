// method by-meee.......
var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var r=[]
var r1=[]
for (i of n){
    if(!r.includes(i)){
        r.push(i)

    }
    else{
        r1.push(i)
    }
}
console.log(r);
console.log(r1);

// method-2)))................................................................
var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
duplicates=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }
}
 
for(var j of uniques){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count >1){
   duplicates.push(j);
 };
}
 
console.log(duplicates);