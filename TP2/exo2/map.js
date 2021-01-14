// Récupérer position
navigator.geolocation.getCurrentPosition(success, error);

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

    // Triangle des bermudes
    var polygon = L.polygon([
        [25.789106,  -80.226529],
        [18.4663188, -66.1057427],
        [32.294887, -64.781380]
    ], {color: 'red'}).addTo(map);

    // Cercle
    var circle = L.circle([latitude, longitude], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: precision
    }).addTo(map);

}

const cities = [
    {name:"nice", lat:43.7123, long:7.2651},
    {name:"paris", lat:48.845, long:2.3752},
    {name:"marseille", lat:43.2545, long: 5.3722},
    {name:"bordeaux", lat:49.6952, long:0.2397},
    {name:"lyon", lat:46.1091, long:3.3057},
]

function fetchPositionOfTarget(citySelected) {
    var targetCity;
    cities.forEach(city => {
        if(city.name == citySelected) {
            targetCity = city
            return
        }
    })
    var kms = calculateDistance(myPosition, targetCity)
    displayDistance(kms)
}

function error() {
    console.log("Géolocalisation refusée")
}

function displayDistance(kms) {
    document.querySelector('#kms').textContent = kms + 'kms'
}

function calculateDistance(pos1, pos2) {
    var R = 6371

    var lat1 = getLatitude(pos1.lat)
    var long1 = getLongitude(pos1.long)

    var lat2 =  getLatitude(pos2.lat)
    var long2 = getLongitude(pos2.long)

    var d = 2 * R * Math.asin(
            Math.sqrt(
                Math.pow(Math.sin((lat1 - lat2)/2),2) +
                Math.cos(lat1) * Math.cos(lat2) * 
                Math.pow(Math.sin( (long1 - long2)/2),2) 
            )
        )
    return Math.ceil(d)
}

function getLatitude(lat) {return lat * Math.PI/180}
function getLongitude(long) {return long * Math.PI/180}



