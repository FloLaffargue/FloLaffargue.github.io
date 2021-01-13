document.querySelector("canvas").addEventListener('touchstart', function(e) {
  e.preventDefault()
  const touche = e.touches[0]
  displayElement('#event', e.type)
  displayElement("#x", touche.screenX)
  displayElement("#y", touche.screenY)
  
})


function displayElement(id, content) {
  document.querySelector(id).textContent = content
}

