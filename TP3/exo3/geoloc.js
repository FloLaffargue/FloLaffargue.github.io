navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    localStorage.setItem('lon', position.coords.longitude)
    localStorage.setItem('lat', position.coords.latitude)
}

function error() {
    console.log("Géolocalisation refusée")
}