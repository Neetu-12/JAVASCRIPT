function num() {
    var n=require("readline-sync").question("enter no:-")
    i=0
    s=""
    while (i<n.length) {
        if (n[i]!="0")  {
            s=s+n[i]
        }      
        i++
    }
    console.log(s);
}

num()