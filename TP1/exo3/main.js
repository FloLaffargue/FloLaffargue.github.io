var rep = prompt("orientation")

if(rep == "o") {
  window.addEventListener("deviceorientation", handleOrientation, true);

  function handleOrientation(event) {
      
      document.querySelector('#orientation').textContent = event
      displayElement("#xO", event.gamma)
      displayElement("#yO", event.beta)
      displayElement("#zO", event.alpha)
  }

} else {

  window.addEventListener("devicemotion", handleMotion)

  function handleMotion(event) {
    displayElement("#xM", event.acceleration.x)
    displayElement("#yM", event.acceleration.y)
    displayElement("#zM", event.acceleration.z)
  
    displayElement("#xR", event.rotationRate.beta)
    displayElement("#yR", event.rotationRate.gamma)
    displayElement("#zR", event.rotationRate.alpha)
  }
    
  
  function displayElement(id, content) {
    document.querySelector(id).textContent = content
  }
}



