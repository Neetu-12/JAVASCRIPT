function showNumbers(limit) {
    for(i=0;i<=limit;i++) {
        if(i%2!=0){
            console.log(i,"odd no.");
        }
        else if(i%2==0){
            console.log(i,"even no.");
        }
    }
}
var n=require("readline-sync").questionInt("enter no:-")
showNumbers(n)