a=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
    r=[]
    i=0
    while (i<a.length){
        for (j in a[i]){
            if (!r.includes(r)){
                r.push(Number(a[i][j]))
            }
        }
        i=i+1
    }
    // console.log(r)
r2=[]
for (i of r){
    if (!r2.includes(i)){
        r2.push(i)
    }
}
console.log(r2)