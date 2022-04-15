var a= {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
    }
var r=[]
for(i in a){
    // console.log(i);
    for(j in a[i])
    r.push(a[i][j])
}
console.log(r.length);