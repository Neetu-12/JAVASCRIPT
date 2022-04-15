let month=require("readline-sync").question("enter the months:-")
if(month=="january" ||month=="may" || month=="march" || month=="july" || month=="august" || month=="october" || month=="december"){
    console.log("31 days")
}
else if (month=="april" || month=="june" || month=="september" || month=="november"){
    console.log("30 days")
}
else{
    console.log("28 days")
}