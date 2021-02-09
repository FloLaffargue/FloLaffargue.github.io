const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ------
// Sphère
// ------
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const texture = new THREE.TextureLoader().load( 'texture3.jpg' );
const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
const cone = new THREE.Mesh( geometry, materialTex );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );

const animate = function () {
    requestAnimationFrame( animate );

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;

    renderer.render( scene, camera );
};

camera.position.z = 70;

scene.add(cone);
scene.add(directionalLight);

renderer.render( scene, camera );

animate();

function rotateCone(degrees) {
    cone.rotation.z = THREE.Math.degToRad(degrees);
}



