// var num=require("readline-sync").questionInt("enter the no:-")
// if (num%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }
// nested if else.....
var num=require("readline-sync").questionInt("enter the no:-")
if (num%100==0){;
    if (num%400==0){;
        console.log("leap year maybe");
    }
    else{;
        console.log("not a leap year");
    }
}
else{;
    if (num%4==0){;
        console.log("leap year")
    }
    else{
        console.log("not a leap year")
    }
}


// ###NESTED IF ELSE:----
// yr=int(input("enter leap year :-"))
// if yr%100==0:
// 	if yr%400==0:
// 		print("leap year")
// 	else:
// 		print("not leap yr")
// else:
// 	if yr%4==0:
// 		print("leap year")
// 	else:
// 		print("not a leap year")
