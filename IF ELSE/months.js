// var month=require("readline-sync").questionInt("enter months:-")
// switch (month) {
//     case 1:
//         console.log(31,"january");
//         break;
//     case 2:
//             console.log(28,"fabruary");
//             break;
//     case 3:
//         console.log(31,"march");
//         break;
//     case 4:
//         console.log(30,"april");
//         break;
//     case 5:
//         console.log(31,"may");
//         break;
//     case 6:
//         console.log(30,"june");
//         break;
//     case 7:
//         console.log(31,"july");
//         break;
//     case 8:
//         console.log(31,"august");
//         break;
//     case 9:
//         console.log(30,"september");
//         break;
//     case 10:
//         console.log(31,"october");
//         break;
//     case 11:
//         console.log(30,"november");
//         break;
//     case 12:
//         console.log(31,"december");
//         break;
// }

var month=require("readline-sync").questionInt("enter months:-")
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31");
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30);
        break
    case 2:
        console.log(28);
}