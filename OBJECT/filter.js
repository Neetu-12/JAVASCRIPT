// var numbers = [1, 2, 6, 8, 12, 14];
// var result = numbers.filter(element => element>5)
// console.log(result);

var numbers = [1, 2, 6, 8, 12, 14];
var a=numbers.filter(function(i){
    return i>5
})
console.log(a);

// t array contains some numbers as elements.
var numbers= [-0.20,-10, 2, -40,1, -25];
 
// method (return element > 0).
var found = numbers.find(function (element) {
   return element > 0;
});
console.log(found);
