// 1)))QUESTIONS
// amt=0
// nu=int(input("Enter number of electric unit"))
// if nu<=100:
//      amt=0
// if nu>100 and nu<=200:
//      amt=(nu-100)*5
// if nu>200:
//      amt=500+(nu-200)*10
// print("Amount to pay :",amt)


// 2)))Questions
var unit=require("readline-sync").questionInt("Enter number of electric unit:-")
if(unit<=50){
    h1=unit*0.50-0.20
    console.log(h1);
}
else if (unit>50 && unit<=150){
    h2=unit*0.75-0.20
    console.log(h2);
}
else if (unit>150 && unit<=250){
    h3=unit*1.20-0.20
    console.log(h3);
}
else if(unit>250){
    h4=unit*1.50-0.20
    console.log(h4);
}
else{
    console.log("nothing");
}
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is add