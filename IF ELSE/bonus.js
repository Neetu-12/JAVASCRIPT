var salary=require("readline-sync").questionInt("enter salary:-")
var year_of_service=require("readline-sync").questionInt("enter service:-")
if (year_of_service>5){
    bonus=salary*(5%100)
    console.log(bonus);
}
else{
    console.log("not gave bonus");
}