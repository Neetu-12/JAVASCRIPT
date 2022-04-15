let char=require("readline-sync").question("enter the character:-")
if (char==char.toUpperCase()){
    console.log("upper case");
}
else if (char==char.toLowerCase()){
    console.log("lower case");
}
else{
    console.log("both upper and lower cases");
}

// var character = require("readline-sync").question("enter characters:-")
// if (character == character.toUpperCase()) {
//     console.log('upper case true');
// }
// if (character == character.toLowerCase()){
//     console.log('lower case true');
// }



// // Get specific char in string
// const char = string.charAt(index);

// const isLowerCaseLetter = (/[a-z]/.test(char));
// const isUpperCaseLetter = (/[A-Z]/.test(char));