var age=require("readline-sync").questionInt("enter the ages:-")
var sex=require("readline-sync").question("enter the gender:-")
if(age>=18 && age<30){
    if(sex=="male"){
        console.log(700);
    }
    else if(sex=="female"){
        console.log(750);
    }
}
else if (age>=30 && age<=40){
    if(sex=="male"){
        console.log(800);
    }
    else if(sex=="female"){
        console.log(850);
    }
}