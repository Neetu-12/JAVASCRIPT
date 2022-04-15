d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
r={}
for (i in d1){
        if (i in d2){
            r[i]=d1[i]+d2[i]
        }
        else{
            r[i]=d1[i]
        }
}

// console.log(r);
for(k in d2){
    if( d2){
        r[k]=d2[k]
    }
}
console.log(r);


// {'a': 400, 'b': 400, 'd': 400, 'c': 300}