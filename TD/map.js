// Récupérer position
navigator.geolocation.getCurrentPosition(success, error);
window.addEventListener("deviceorientation", handleOrientation, true);

var longitude;
var latitude;
var precision;
var myPosition = {}

function success(position) {
    
    longitude = position.coords.longitude
    latitude = position.coords.latitude
    precision = position.coords.accuracy

    myPosition.lat = latitude
    myPosition.long = longitude

    var layer = new L.StamenTileLayer("toner");
    var map = new L.Map("mapid", {
        center: new L.LatLng(latitude, longitude),
        zoom: 4
    });
    map.addLayer(layer);
    var compass = new L.Control.Compass()
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




