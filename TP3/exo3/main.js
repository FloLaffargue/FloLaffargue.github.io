const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(1, 32, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const texture = new THREE.TextureLoader().load( 'texture2.jpg' );

// immediately use the texture for material creation
const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( geometry, materialTex );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );
scene.add( directionalLight );

camera.position.z = 100;

const animate = function () {
    requestAnimationFrame( animate );

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;

    renderer.render( scene, camera );
};

// Ajout markeur
var long = localStorage.getItem('lon');
var lat = localStorage.getItem('lat');

scene.add(sphere);

getCountries(function(countries) {
    countries.forEach(country => {
        fixPoint(country)
    });
})

function fixPoint(country) {

    console.log(country)
    var mark = createSphere(country.flag)
    var coords = latOrLonToCartesien(country.latlng[1], country.latlng[0])
    
    mark.position.set(coords.x, coords.y, coords.z)
    scene.add(mark)
}


renderer.render( scene, camera );

animate();



