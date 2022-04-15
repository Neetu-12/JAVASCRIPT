function game(){
    console.log("!!...WELOCME TO GUESSING GAME...!!");
    var secret_no=Math.floor(Math.random() * 11);
    // console.log(secret_no);
    var i=0
    while(i<=5){
        var n2=require("readline-sync").questionInt("enter your guessing no:-")
        if (n2<secret_no){
            console.log(" you choose but LOW NO... acc...to guessing no.");
        }
        else if(n2>secret_no){
            console.log("you choose but HIGH NO.... acc.. to guessing no.");
        }
        else if(n2==secret_no){
            console.log("you are winner");
            break
        }
        if (i==5){
            console.log("Your chances are finshed now!!")
            console.log("GAME OVER");
        }
        i=i+1
    }
}
game()