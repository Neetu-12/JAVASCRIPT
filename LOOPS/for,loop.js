// odd no:---
// for(i=1;i<=10;i+=2){
//     console.log(i);
// }

// // simple 1to 9
// for(i=1;i<=10;i++){
//     console.log(i);
// }

// even no:---
// for(i=0;i<=10;i+=2){
//     console.log(i);
// }


// text=""
// for (let i = 0; i < 1; i++) {
//     text += "The number is " +text[0];
//   }
// console.log(text);

let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

console.log(text);