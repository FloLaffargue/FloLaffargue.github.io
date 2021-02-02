
function latOrLonToCartesien(lon, lat) {

    // azimut = longitude
    // inclinaison = latitude

    // Conversion en radian
    lon = - lon * Math.PI/180
    lat = lat * Math.PI/180

    const radius = 1

    var x = radius * Math.cos(lat) * Math.cos(lon);
    var y = radius * Math.sin(lat);  
    var z = radius * Math.cos(lat) * Math.sin(lon);  

    return {
        x,y,z
    }
}

function createSphere(flag) {
    
    const geometry = new THREE.SphereGeometry(0.03, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const texture = new THREE.TextureLoader().load( flag );
    const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
    const sphere = new THREE.Mesh( geometry, materialTex );

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


