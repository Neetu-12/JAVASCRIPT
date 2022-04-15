var time=require("readline-sync").question("enter your meal-time:-")
switch (time) {
    case "morning":
        console.log("maggie");
        break;
    case "lunch":
        console.log("matter paneer");
        break;
    case "evening":
        console.log("milk-break");
        break;
    case "dinner":
        console.log("chhole-chawal");
        break;
    case "night":
        console.log("sleeping time");
        break;
}