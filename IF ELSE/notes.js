// const amount=require("readline-sync").questionInt("enter the total amount")
// // let notes=require("readline-sync").questionInt("enter the notes")
// if (Math.floor(amount/notes)){
//     amount/notes
//     console.log("10 notes")
// }
// else{
//     console.log("more notes")
// }
// let l=["apple","mango"]
// console.log(l.includes("apple"))

var amnt=100
var note=require("readline-sync").questionInt("eneter notes:-")
if (note==50 || note==100||note==10||note==40){
    no_of_notes=100/note
    console.log(no_of_notes);
}
else{
    console.log("nothing");
}