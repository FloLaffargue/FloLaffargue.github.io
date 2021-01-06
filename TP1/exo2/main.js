navigator.geolocation.getCurrentPosition(success, error);

navigator.geolocation.watchPosition(success, error);

function success(position) {
    displayElement("#longitude", position.coords.longitude)
    displayElement("#latitude", position.coords.latitude)
    displayElement("#speed", position.coords.speed)

    const date = new Date(position.timestamp)
    const hours =  date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const formattedDate = `Il est ${hours} heures, ${minutes} minutes et ${seconds} secondes`
    displayElement("#timestamp", formattedDate)

}

function error() {
    console.log("Géolocalisation refusée")
}

function displayElement(id, content) {
    if(content == null) content = 0
    document.querySelector(id).textContent = content
}