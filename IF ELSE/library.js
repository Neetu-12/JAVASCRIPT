var day=require("readline-sync").questionInt("enter days:-")
if(day<=5){
    console.log(day*2);
}
else if(day>5 && day<=10){
    console.log(day*3);
}
else if(day>10 && day<=15){
    console.log(day*4);
}
else if(day>15){
    console.log(day*5);
}