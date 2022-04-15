// t array contains some numbers as elements.
var numbers= [-0.20,-10, 2, -40,1, -25];
// method (return element > 0).
var found = numbers.find(function (element) {
   return element > 0;
});
console.log(found);