var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1/1, 0.1, 1000 );
//background color
//scene.background = new THREE.Color('#d5eb43');

var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
//canvas size
renderer.setSize( 150, 150 );
renderer.setClearColor(0x000000, 0);
document.getElementById('logo').appendChild( renderer.domElement );

//var controls = new THREE.OrbitControls(camera);
//var gridHelper = new THREE.GridHelper(50, 50, 1);

var material = new THREE.MeshBasicMaterial

//object loader
var loader = new THREE.OBJLoader();
loader.load('js/snakeFixed.obj', function(object) {
  scene.add(object, material);
  object.rotation.x += 0.01;
});

//lights
var keyLight = new THREE.PointLight(new THREE.Color('hsl(0, 100%, 50%)'), 1.0);
var topLight = new THREE.DirectionalLight('#ff4045', 1);
var fillLight = new THREE.DirectionalLight('#ffffff', 1);
var backLight = new THREE.PointLight('#ff4045', 1);
scene.add(keyLight, topLight, backLight);

//positioning
camera.position.z = 8;
keyLight.position.z = 5;
topLight.position.y = 10;
fillLight.position.x = 10;
fillLight.position.y = -2;
backLight.position.z = -10;
backLight.position.y = 2;
backLight.position.x = 5;

var animate = function () {
  requestAnimationFrame( animate );

  var timer = Date.now() * 0.0005;
  scene.rotation.y += .007;
  camera.lookAt(scene.position);
  //controls.maxPolarAngle = 2;
  //controls.minPolarAngle = .1;
  //controls.enableZoom = false;

  renderer.render( scene, camera );
  controls.update();
};

animate();
