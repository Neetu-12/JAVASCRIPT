// ways to define a function:-...
// 1) named function...
// 2) anonymous function...
// 3))Invoked function(self)...

// 1) named function...
// function myname(){
//     console.log("Hii...");
// }
// myname()

// // 2) anonymous function...
// var a=function () {
//     console.log("Hiii....");
// }
// a()

// // for return
// function myname(){
//     return ("Hiii....")
// }
// var a=myname();
// console.log(a);

//3) Invoked function(self)...
(function my(){
    console.log("hii2687")
})();


(function myName () {
    var x = "Hello!! Nayak";  // I will invoke myself
    console.log(x);
   })();
    
   // Output :
   // Hello!! Nayak
   

(function(str1,str2){
    console.log(str1===str2)
 })("kumar","kumar");