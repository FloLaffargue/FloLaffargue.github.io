// Récupérer position
navigator.geolocation.getCurrentPosition(success, error);
window.addEventListener("deviceorientation", handleOrientation, true);

var longitude;
var latitude;
var precision;
var myPosition = {}
var compass = new L.Control.Compass()

function success(position) {
    
    longitude = position.coords.longitude
    latitude = position.coords.latitude
    precision = position.coords.accuracy

    myPosition.lat = latitude
    myPosition.long = longitude

    var map = L.map('mapid').setView([latitude, longitude], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    map.addControl(compass);

    // Cercle
    var circle = L.circle([latitude, longitude], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: precision
    }).addTo(map);

}

function error() {
    console.log("Géolocalisation refusée")
}


function handleOrientation(event) {
    compass.setAngle(event.alpha)
}




