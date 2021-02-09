const canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
var boussole = new Image()
var aiguille = new Image()
aiguille.src = 'needle.png'; 
aiguille.style.transform = "rotate(20deg)"
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

function handleMotion(event) {
  alert(event)
  ctx.rotate(45);
  displayElement("#xA", event.acceleration.x)
  displayElement("#yA", event.acceleration.y)
  displayElement("#zA", event.acceleration.z)

  displayElement("#xR", event.rotationRate.beta)
  displayElement("#yR", event.rotationRate.gamma)
  displayElement("#zR", event.rotationRate.alpha)
}

function handleOrientation(event) {
    alert(event)
    displayElement("#xO", event.gamma)
    displayElement("#yO", event.beta)
    displayElement("#zO", event.alpha)
}







