// var a={"name":"neetu","bahn":"bhai"}
// for(i in a){
//     console.log(i);
// }


var a="navgurukul"
var c1=0
var c2=0
var c3=0
var c4=0
var c5=0
var c6=0
var c7=0
var c8=0

var i=0
while (i<a.length){
    if (a[i]=="n"){
        c1=c1+1
    }
    if (a[i]=="a"){
        c2=c2+1
    }
    if (a[i]=="v"){
        c3=c3+1
    }
    if (a[i]=="g"){
        c4=c4+1
    }
    if (a[i]=="u"){
        c5=c5+1
    }
    if (a[i]=="r"){
        c6=c6+1
    }
    if (a[i]=="k"){
        c7=c7+1
    }
    if (a[i]=="l"){
        c8=c8+1
    }
    i=i+1
}

console.log("n",c1)
console.log("a",c2)
console.log("v",c3)
console.log("g",c4)
console.log("u",c5)
console.log("r",c6)
console.log("k",c7)
console.log("l",c8)


