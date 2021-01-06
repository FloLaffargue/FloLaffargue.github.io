window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    
    document.querySelector('#orientation').textContent = event
    displayElement("#x", event.gamma)
    displayElement("#y", event.beta)
    displayElement("#z", event.alpha)
    displayElement("#absolute", event.alpha)
  }

  function displayElement(id, content) {
    if(content == null) content = 0
    document.querySelector(id).textContent = content
}
  