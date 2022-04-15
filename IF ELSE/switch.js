var day=require("readline-sync").questionInt("enter the no:-");
switch(day){
    case 1:
        console.log("sunday");
        break
    case 2:
    //     console.log("monday");
        // break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;

    default:
        console.log("wrong your input no.")
}

// switch (new Date().getDay()) //{
//     case 0:
//       day = "Sunday";
//     case 1:
//       day = "Monday";
//     case 2:
//        day = "Tuesday";
//     case 3:
//       day = "Wednesday";
//     case 4:
//       day = "Thursday";
//     case 5:
//       day = "Friday";
//     case 6:
//       day = "Saturday";
//   }

// console.log(new Date().getDay())
// console.log(new Date)

// console.log(new Date().getDay())
