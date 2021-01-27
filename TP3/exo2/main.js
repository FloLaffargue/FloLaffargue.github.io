import { GLTFLoader } from 'https://unpkg.com/three@0.125.1/examples/jsm/loaders/GLTFLoader.js';
			
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var group = new THREE.Group();
scene.add(group)

const geometry = new THREE.BoxGeometry();
const material = new  THREE.MeshStandardMaterial( {
    roughness: 1,
    emissive: 0xfc6161,
    // flatShading: true,
    wireframe: true,

} );
const cube = new THREE.Mesh( geometry, material )
cube.position.x = -1

const geometry2 = new THREE.RingBufferGeometry( 5, 10, 8,8,0,6.3 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const ring = new THREE.Mesh( geometry2, material2 );

var light = new THREE.DirectionalLight( 0xdddddd, 0.8 );
light.position.set( -80, 80, 80 );

group.add( cube );
group.add( ring );

camera.position.z = 5;

// Ajout objet 3D

const loader = new GLTFLoader();

loader.load( './Flower.glb', function ( gltf ) {
    
    const root = gltf.scene
    group.add( root );

}, undefined, function ( error ) {

	console.error( error );

} );

const animate = function () {
    requestAnimationFrame( animate );

    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};
renderer.render( scene, camera );

animate();