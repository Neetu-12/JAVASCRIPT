var purchage_amount=require("readline-sync").questionInt("enter one amount unit:-")
if (purchage_amount>1000){
    // provide discount
    discount=0.1
    total=purchage_amount-discount
    console.log("greater than 1000");
}
else{
    console.log("less than 1000");
}