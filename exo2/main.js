navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    console.log(position)
    displayElement("#longitude", position.coords.longitude)
    displayElement("#latitude", position.coords.latitude)
    displayElement("#speed", position.coords.speed)
    displayElement("#timestamp", position.timestamp)
}

function error() {
    console.log("Géolocalisation refusée")
}

function displayElement(id, content) {
    if(content == null) content = 0
    document.querySelector(id).textContent = content
}