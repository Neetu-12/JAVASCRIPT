var num =require("readline-sync").questionInt("enter the no:-")
switch (num){
    case num > 0:
        console.log("It is a positive number")
        break;
    case num < 0:
        console.log("It is a negative number")
        break;
    case num == 0:
        console.log("It is a zero")
        break;
    default:
        console.log("Invalid input")
}
