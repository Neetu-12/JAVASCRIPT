var attendance=require("readline-sync").questionInt("enter attendance:-")
if (attendance>75){
    attended=0.25
    total=attendance-attended
    console.log("child can sit");
    console.log(total);
}
else{
    console.log("child can't sit in class");
}


// var purchage_amount=require("readline-sync").questionInt("enter one amount unit:-")
// if (purchage_amount>1000){
//     // provide discount
//     discount=0.1
//     total=purchage_amount-discount
//     console.log("greater than 1000");
// }