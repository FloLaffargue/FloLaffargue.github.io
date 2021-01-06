document.querySelector("canvas").addEventListener('touchstart', function(e) {
  e.preventDefault()
  const touche = e.touches[0]
  displayElement("#x", touche.screenX)
  displayElement("#y", touche.screenY)
  
  document.querySelector('el').textContent = JSON.stringify(e)
})


function displayElement(id, content) {
  document.querySelector(id).textContent = content
}

