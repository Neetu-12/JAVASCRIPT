let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}
console.log('------------------')
// cmpValue are the property values
for (let cmpValue of Navgurukul) {
 console.log(cmpValue)
}

// Output:

// 0
// 1
// 2
// ------------------------
// Pune
// Bangalore
// Sarjapur