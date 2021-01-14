var layer = new L.StamenTileLayer("toner");
var markers = []
var map = new L.Map("mapid", {
    center: new L.LatLng(43.7123, 7.2651),
    zoom: 5
});

map.addLayer(layer);

function fetchDpts(dpt) {

    cleanMarkers()

    fetch(`https://geo.api.gouv.fr/departements/${dpt}/communes?fields=nom,codesPostaux,centre&format=json&geometry=centre`)
    .then((response) => {
        response.json()
            .then(dpts => {
                displayDepartements(dpts)
        })
    })
}

function cleanMarkers() {
    markers.forEach(marker => {
      map.removeLayer(marker)  
    })
}

function displayDepartements(dpts) {
    dpts.forEach(dpt => {
        addMarker(dpt.centre.coordinates[0], dpt.centre.coordinates[1])
    });
}

function addMarker(latitude, longitude) {
    var marker = L.marker([longitude, latitude]).addTo(map);
    markers.push(marker)
}





