var a= {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}
m=0
s=0
t=0

for (i in a){
    if (a[i]>m){
        t=s
        s=m
        m=a[i]
    }
    if (a[i]>s && a[i]<m){
        s=m
        m=a[i]
    }
    // # if a[i]>s>a[i]<m:
    // #     t=a[i]
}
console.log([m,t,s])
