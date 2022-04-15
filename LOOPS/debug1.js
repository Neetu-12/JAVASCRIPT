let choose_ascii=require("readline-sync").questionInt("enter a no")
s=""
var ascii_char=97+choose_ascii
for (var i=97;i<=ascii_char-1;i++) {
      s=s+String.fromCharCode(i)
}
console.log(s)