const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ------
// Sphère
// ------
const geometry = new THREE.SphereGeometry(1, 32, 32 );
const texture = new THREE.TextureLoader().load( 'texture2.jpg' );
const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( geometry, materialTex );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );


const animate = function () {
    requestAnimationFrame( animate );

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;

    renderer.render( scene, camera );
};

camera.position.z = 5;

scene.add(sphere);
scene.add(directionalLight);


// ------
// Ajout markeur position actuelle
// ------
var long = localStorage.getItem('lon');
var lat = localStorage.getItem('lat');

const loader = new THREE.GLTFLoader();

loader.load( './duck.gltf', function ( gltf ) {
    
    gltf.scene.scale.multiplyScalar(4 / 100);
    var coords = latOrLonToCartesien(long, lat)
    gltf.scene.position.x = coords.x;
    gltf.scene.position.y = coords.y;
    gltf.scene.position.z = coords.z;
    scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


getCountries(function(countries) {

    // for(i = 0; i < 10; i++) {
    //     var country = countries[i]
    //     fixPoint(country.flag, country.latlng[1], country.latlng[0])

    // }
    countries.forEach(country => {
        fixPoint(country.flag, country.latlng[1], country.latlng[0])
    });
})

renderer.render( scene, camera );

animate();



