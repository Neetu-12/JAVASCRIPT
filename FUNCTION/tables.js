// for many tables....
var n=require("readline-sync").questionInt("enter no:-")
for(i=1;i<=n;i++){
    for(j=1;j<=10;j++){
        console.log(i*j);
    }  
    console.log("..........");
}

// ony for one table.....
var n=require("readline-sync").questionInt("enter no:-")
for (i=1;i<=10;i++){
    console.log(i*n);
}