var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1/1, 0.1, 1000 );
//background color
//scene.background = new THREE.Color('#d5eb43');

var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
//canvas size
renderer.setSize( 400, 400 );
renderer.setClearColor(0x000000, 0);
document.getElementById('logo').appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera);
//var gridHelper = new THREE.GridHelper(50, 50, 1);

//object loader
var loader = new THREE.OBJLoader();
loader.load('js/snakeFixed.obj', function(object) {
  scene.add(object);
  object.rotation.x += 0.01;
});

//lights
var pointLight = new THREE.PointLight('#ffffff', 1);
pointLight.position.set(0, 35, 46);
var ambLight = new THREE.AmbientLight('#ffffff', 1);
scene.add(ambLight, pointLight);

//positioning
camera.position.z = 8;

var animate = function () {
  requestAnimationFrame( animate );

  scene.rotation.y += .007;
  camera.lookAt(scene.position);
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.04;
  controls.rotateSpeed = 0.001;

  renderer.render( scene, camera );
  controls.update();
};

animate();
