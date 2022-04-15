var r={}
for (i=1;i<=10;i++){
    st=require("readline-sync").question("enter the students name:-")
    mrk=require("readline-sync").questionInt("enter the students marks:-")
    r[st]=mrk
}
console.log(r);