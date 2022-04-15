var num1=require("readline-sync").questionInt("enter no:-")
var num2=require("readline-sync").questionInt("enter no:-")
var num3=require("readline-sync").questionInt("enter no:-")
if(num1>num2){
    if (num1<num3){
        median=num1
    }
    else if(num2>num3){
        median=num2
    }
    else{
        median=num3
    }
}

else{
    if(num1>num3){
        median=num1
    }
    else if(num2<num3){
        median=num2
    }
    else{
        median=num3
    }
}
console.log("The median is",median);

// function getDate()
// {
// 	let  today 		= new Date();
// 	let  dd 		= String(today.getDate()).padStart(2, '0');
// 	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
// 	let  yyyy 		= today.getFullYear();

// 	return dd + '/' + mm + '/' + yyyy;
// getDate()
