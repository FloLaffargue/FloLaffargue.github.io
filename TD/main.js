const canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
var boussole = new Image()
var aiguille = new Image()
aiguille.src = 'needle.png'; 
boussole.src = 'compass.png';

aiguille.addEventListener('load', function() {
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.rotate(180 * Math.PI/180);
    ctx.drawImage(aiguille,-aiguille.width/2,-aiguille.width/2)
    ctx.restore();
}, false);

window.addEventListener("deviceorientation", handleOrientation, true);

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
  ctx.rotate(180 * Math.PI/180);
  ctx.drawImage(aiguille,-aiguille.width/2,-aiguille.width/2)
  ctx.restore();
}







