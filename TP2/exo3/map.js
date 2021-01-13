// Récupérer position

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {

    var longitude = position.coords.longitude
    var latitude = position.coords.latitude
    /*
    var mymap = L.map('mapid').setView([latitude, longitude], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
*/
    //var marker = L.marker([latitude, longitude]).addTo(mymap);

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
    var circle = L.circle([25.00078, -71.00017], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: 500000
    }).addTo(map);

}

function error() {
    console.log("Géolocalisation refusée")
}




