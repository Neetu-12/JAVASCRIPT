// one function to another function calls
function num(a,b) {
    var c=a+b
    return c
}
function num1(y,t) {
    p=y+t+num(2,4)
    return p
}
console.log(num1(23,3))