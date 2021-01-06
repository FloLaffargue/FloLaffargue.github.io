
window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion)

function displayElement(id, content) {
  document.querySelector(id).textContent = content
}

function handleMotion(event) {
  displayElement("#xA", event.acceleration.x)
  displayElement("#yA", event.acceleration.y)
  displayElement("#zA", event.acceleration.z)

  displayElement("#xR", event.rotationRate.beta)
  displayElement("#yR", event.rotationRate.gamma)
  displayElement("#zR", event.rotationRate.alpha)
}

function handleOrientation(event) {
    
    displayElement("#xO", event.gamma)
    displayElement("#yO", event.beta)
    displayElement("#zO", event.alpha)
}




