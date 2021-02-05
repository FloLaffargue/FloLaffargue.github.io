function latOrLonToCartesien(lon, lat, cone) {

    // azimut = longitude
    // inclinaison = latitude

    // Conversion longitude/latitude en valeur radian
    lon = - lon * Math.PI/180
    lat = lat * Math.PI/180

    const radius = 1.03

    var x = radius * Math.cos(lat) * Math.cos(lon);
    var y = radius * Math.sin(lat);  
    var z = radius * Math.cos(lat) * Math.sin(lon);  

    return {
        x,y,z
    }
}

function createSphere(flag) {
    
    const geometry = new THREE.SphereGeometry(0.02, 32, 32 );
    const texture = new THREE.TextureLoader().load( flag );
    const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
    const sphere = new THREE.Mesh( geometry, materialTex );

    return sphere
}

function createCone() {

    var radius = 0.005;
    var height = 0.20;

    const texture = new THREE.TextureLoader().load( 'texture3.jpg' );
    const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
    var cone = new THREE.Mesh(new THREE.ConeBufferGeometry(radius, height, 8, 1, true), materialTex);
    cone.position.y = height * 0.5;
    cone.rotation.set(10)

    return cone
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

function fixPoint(texture, long, lat) {

    var mark = createSphere(texture)
    var coords = latOrLonToCartesien(long,lat)
    
    mark.position.set(coords.x, coords.y, coords.z)
    scene.add(mark)
}

