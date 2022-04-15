const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
const score=document.getElementById("score");

function jump(){
    dino.classList.add('jump-animation');
    setTimeout(()=>{
        dino.classList.remove('jump-animation');
    },50);
}
document.addEventListener('keypress',()=>{
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
});

// setInterval(()=>{
//     score.innerText++;
//     const dinoTop=parseInt(window.getComputedStyle(dino)
//     .getPropertyValue('top'));

//     const cactusleft=parseInt(window.getComputedStyle(cactus)
//     .getPropertyValue('left'));
//     if(cactusleft<0){
//         cactus.style.display='none';
//     }
//     else{
//         cactus.style.display='';
//     }
//     if(cactusleft<50 && dinoTop>150){
//         // alert("Game Over")
//     }
// },50);

