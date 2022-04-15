var a="MISSISSIPPI"
var r={}
var i=0
while (i<a.length) {
    j=0
    c=0
    while (j<a.length) {
        if (a[i]==a[j]) {
            c=c+1
            r[a[i]]=c
        }
        j++
    }
    i++
}
console.log(r);