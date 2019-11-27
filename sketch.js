
let angle = 0;


function setup() {
  var myCanvas = createCanvas(120, 120, WEBGL);
  myCanvas.parent("spinsnake");

  snake = loadModel('snakesmall.obj');

}

function draw() {
  background(185, 236, 96);
  ambientLight(212, 41, 41);
  pointLight(256, 256, 256, -500, -500, 1);
  rotateY(angle);
  rotateX(3.1);
  model(snake);
  angle += .01;
}
