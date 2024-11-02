const play = document.getElementsByTagName("canvas")[0];
const buttonP = document.getElementsByTagName("button")[0];
const buttonS = document.getElementsByTagName("button")[1];
const buttonM = document.getElementsByTagName("button")[2];
var draw = play.getContext("2d");
var audio = new Audio("./screw_clan.mp3");

draw.fillStyle = "white";
draw.moveTo(6,6);
draw.lineTo(14,10);
draw.lineTo(6,14);
draw.fill();

play.addEventListener("click" , () => {
    audio.play();
})

buttonP.addEventListener("click" , () => {
    audio.pause();
})

buttonS.addEventListener("click" , () => {
    audio.pause();
    audio.currentTime = 0;
})

buttonM.addEventListener("click" , () => {
    if (audio.muted == true){
        audio.muted = false;
    } else {
        audio.muted = true;        
    }
  
})



