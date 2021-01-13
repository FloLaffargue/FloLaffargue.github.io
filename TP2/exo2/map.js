// Récupérer position

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {

    var longitude = position.coords.longitude
    var latitude = position.coords.latitude
    var precision = position.coords.accuracy


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

    calculerEcartNiceMarseille()

}

function error() {
    console.log("Géolocalisation refusée")
}

function calculerEcartNiceMarseille() {
    2 * 6371
}



