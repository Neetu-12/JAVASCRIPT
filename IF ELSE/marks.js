var marks=require("readline-sync").questionInt("enter your marks:-")
if (marks<25){
    console.log("F grade");
}
else if(marks>=25 && marks<45){
    console.log("E grade");
}

else if(marks>=45 && marks<50){
    console.log("D grade");
}

else if(marks>=50 && marks<60){
    console.log("C grade");
}

else if(marks>=60 && marks<80){
    console.log("B grade");
}
else if(marks>80){
    console.log("A grade");
}