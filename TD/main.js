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

function displayElement(id, content) {
  document.querySelector(id).textContent = content
}

function handleOrientation(event) {
    displayElement("#zO", event.alpha)
    drawRotated(event.alpha)
    // alert(event.alpha)
}

function drawRotated(degrees){

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.rotate(degrees*Math.PI/180);
  ctx.drawImage(image,-image.width/2,-image.width/2);
  ctx.restore();
}







