// perfect no....
var i=1
while(i<100){
    var n=i
    var j=1
    var sum=0
    while(j<n){
        if(n%j==0){
            sum=sum+j
        }
        j=j+1
    }
    if (sum==n){
        console.log(j,"perfect n");
    }
    i=i+1
}

// checked perfect no. it is or not....
var n=require("readline-sync").questionInt("enter no:-")
var i=1
var s=0
while(i<n){
    a=n%i
    if(a==0){
        s=s+i
    }
    i=i+1
}
if(n==s){
    console.log("perfect no.");
}
else{
    console.log("not perfect no.");
}