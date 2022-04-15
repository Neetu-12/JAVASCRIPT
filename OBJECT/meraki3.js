var mainString="My name is kumar, and my friend’s name is Dhamu"
// var user=require("readline-sync").question("Enter the word:")
st=mainString.split(" ")
var count=0
for(i=0;i<st.length;i++){
    if(st[i]=="is"){
        count=count+1
    }
}
console.log(count)
