// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
//    new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length;j++ ){
//     if (new_array[j]===Name[j]){
//        count++;
//    }
// }
// if(count===Name.length){
//    console.log("This is palindrome");
// }else{
//    console.log("This is not a palindrome");
// }


// // 2)))).....
// var b=require("readline-sync").question("enter no:-")
// var i=-1
// var s=""
// while (i>=-b.length) {
//     s=s+b[b.length+(i)]
//     i--
// }
// if(b===s){
//     console.log("pallindrome");
// }
// else{
//     console.log("not pallindrome");
// }

var b=require("readline-sync").question("")
var c=""
var d=""
for(i of b){
    if(i=="@"|| i=="!"||i=="#"||i=="$"||i=="%"||i=="^"||i=="&" || i=="*" || i==")"||i=="("||i=="~"||i=="\\" || i=="<"||i===">"||i=="?"||i==","||i=="."||i=="+"||i==";"||i=="`"||i==" "||i=="'"||i=='"'||i==":"||i=="_"||i=="{"||i=="}"||i=="["||i=="]"||i=="-"||i=="=="){
        
    }
    else{
        c=c+i;
        d=i+d
    }

}
if(c==d){
    console.log("palindrome",c,d);
}
else{
    console.log("not palindrome",c,d);
}