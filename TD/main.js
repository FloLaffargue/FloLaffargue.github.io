const canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
var boussole = new Image()
var aiguille = new Image()
aiguille.src = 'needle.png'; 
boussole.src = 'compass.png';

boussole.addEventListener('load', function() {
    ctx.drawImage(boussole,10,10)
    ctx.drawImage(aiguille,10,10)
}, false);

window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion)

function handleOrientation(event) {
    drawRotated(event.alpha)
    // alert(event.alpha)
}

function drawRotated(degrees){

  context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(canvas.width/2,canvas.height/2);
  context.rotate(degrees*Math.PI/180);
  context.drawImage(image,-image.width/2,-image.width/2);
  context.restore();
}







