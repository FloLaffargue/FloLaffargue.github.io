const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.RingBufferGeometry( 5, 10, 8,8,0,6.3 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = new THREE.TextureLoader().load( 'texture.jpg' );

// immediately use the texture for material creation

const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
const controls = new THREE.OrbitControls( camera, renderer.domElement );
const ring = new THREE.Mesh( geometry, materialTex );
/*
var light = new THREE.DirectionalLight( 0xdddddd, 0.8 );
light.position.set( -80, 80, 80 );
*/
const directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );
scene.add( directionalLight );
scene.add(ring);

camera.position.z = 100;

// Ajout objet 3D
const loader = new THREE.GLTFLoader();

loader.load( './monster.gltf', function ( gltf ) {
    
    scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const animate = function () {
    requestAnimationFrame( animate );

    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;

    renderer.render( scene, camera );
};
renderer.render( scene, camera );

animate();