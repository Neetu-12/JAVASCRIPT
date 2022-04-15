const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {//let is local variable,var is global variable-it's using all around...,but let we will used only inside of the loop
console.log(person[x]);
}
// console.log(person[x]);