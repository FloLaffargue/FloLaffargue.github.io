
function latOrLonToCartesien(lon, lat) {

    // azimut = longitude
    // inclinaison = latitude

    // Conversion en radian
    lon = lon * Math.PI/180
    lat = lat * Math.PI/180

    const radius = 1

    var x = radius * Math.sin(lat) * Math.cos(lon);
    var y = radius * Math.sin(lat) * Math.sin(lon);  
    var z = radius * Math.cos(lat)

    return {
        x,y,z
    }
}

function createSphere() {
    
    const geometry = new THREE.SphereGeometry(0.05, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const sphere = new THREE.Mesh( geometry, material );

    return sphere
}

function getCountries(callback) {

    fetch('https://restcountries.eu/rest/v2/all')
        .then(resp => {
            resp.json()
                .then(data => {
                    callback(data)
                })
        })
}

/*
function Marker() {
    // THREE.Object3D.call(this);

    var radius = 0.005;
    var sphereRadius = 0.02;
    var height = 0.05;

    var material = new THREE.MeshPhongMaterial({ color: 0xffff00 });

    var marker = new THREE.Mesh(new THREE.SphereBufferGeometry(sphereRadius, 16, 8), material);

    return marker
}
*/


