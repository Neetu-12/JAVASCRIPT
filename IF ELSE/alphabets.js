var char=require("readline-sync").question("enter char:-")
if (char>="a" && char<="z" || char>="A" && char<="Z"){
    console.log("an alphabets")
}
else{
    console.log("not an alphabets")
}