var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1/1, 0.1, 1000 );
//background color
//scene.background = new THREE.Color('#d5eb43');

var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
//canvas size


renderer.setSize( 150, 150 );
renderer.setClearColor(0x000000, 0);
document.getElementById('logo').appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, document.getElementById('logo'));
controls.enableZoom = false;
controls.enablePan = false;

//var gridHelper = new THREE.GridHelper(50, 50, 1);

var material = new THREE.MeshBasicMaterial

//object loader
var loader = new THREE.OBJLoader();
loader.load('/js/snakeFixed.obj', function(object) {
  scene.add(object, material);
  object.rotation.x += 0.01;
});

//lights
//var pointLight = new THREE.PointLight('#001489', 1);
//pointLight.position.set(0, 35, 46);
//var ambLight = new THREE.AmbientLight('#001489', 1);
//scene.add(ambLight, pointLight);

var ambLight = new THREE.AmbientLight('#001489', 1)
scene.add(ambLight);

//positioning
camera.position.z = 8;


var animate = function () {
  requestAnimationFrame( animate );

  var timer = Date.now() * 0.0005;
  scene.rotation.y += .009;
  camera.lookAt(scene.position);
  controls.maxPolarAngle = 2;
  controls.minPolarAngle = .1;
  controls.rotateSpeed = 0.2;
  ;

  renderer.render( scene, camera );
  controls.update();
};

animate();
