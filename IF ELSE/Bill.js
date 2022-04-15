// First 100 units                                             no charge
// Next 100 units                                              Rs 5 per unit
// After 200 units                                             Rs 10 per unit
// (For example if input unit is 350 than total bill amount is Rs2000)

var unit=require("readline-sync").questionInt("enter the units:-")
if (unit<=100){
    h1=unit*0
    console.log("no charges");
}
else if(unit<=200){
    h2=unit*5
    console.log(h2);
}
else if(unit>200){
    h3=unit*10
    console.log(h3);
}
else{
    console.log("what?...");
}