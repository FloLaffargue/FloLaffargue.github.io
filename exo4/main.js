document.querySelector("canvas").addEventListener('touchstart', function(e) {
  alert(e)
  console.log(e)
})

function handleOrientation(event) {
    
    document.querySelector('#orientation').textContent = event
    displayElement("#x", event.gamma)
    displayElement("#y", event.beta)
    displayElement("#z", event.alpha)
    displayElement("#absolute", event.alpha)
  }

  function displayElement(id, content) {
    document.querySelector(id).textContent = content
}
  