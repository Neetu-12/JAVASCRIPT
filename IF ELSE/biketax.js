//wrigght answerrrr.....
var pr=require("readline-sync").questionInt("Enter the price of bike")
if (pr>10000){
    h1=Math.floor(pr*15/100)
    console.log(pr-h1)
}
else if (pr > 50000 && pr<= 100000){
    h2=Math.floor(pr*10/100)
    console.log(pr-h2);
}
else if (pr > 50000 && pr<= 100000){
    h3=Math.floor(pr*5/100)
    console.log(pr-h3);
}