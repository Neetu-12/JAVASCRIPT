// function license_checker(speed){
//     if(speed < 70){
//         console.log("ok");
//     }
//     if(speed > 70){
//         points=0
//         for(var i=70;i>speed;i++){          
//             points+=1
//         }
//         if(points>12){
//             console.log("License suspended");
//         }
//         else{
//             console.log(points);
//         }
//     }
//  }
//  license_checker(135);

// // 2))).....
function neet(speed) {
    var points=Math.floor(speed-70)/5
    if(speed<70){
        console.log("ok");
    }
    else if(speed>=70 && speed<130){
        console.log(points,'warning! please do speed slow');
    }
    else{
        console.log(points,'license suspended')
    }
    
}
var speed=require("readline-sync").questionInt("enter speedno:-")
neet(speed)