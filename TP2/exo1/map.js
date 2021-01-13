// Récupérer position

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {

    var longitude = position.coords.longitude
    var latitude = position.coords.latitude
    var mymap = L.map('mapid').setView([latitude, longitude], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var marker = L.marker([latitude, longitude]).addTo(mymap);

}

function error() {
    console.log("Géolocalisation refusée")
}




