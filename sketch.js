
// function setup() {
//   createCanvas(500,500);
//   let test = new Something();
// }
//
// function draw() {
//   background('red');
// }

let ox = new Ox();
let font;
let points = [];

function preload(){
  font = loadFont('./fonts/SourceCodePro-Regular.ttf');
}

function setup() {
  textFont(font);
	createCanvas(600, 600);
	for(let i = 0; i < 1; i++){
		ox.addWindox();
	}
}

function draw() {
	//background(255);
  if(frameCount == 1){
    background('#4D4C7D');
    ox.draw();
  }

  noStroke();
  fill(255,100);
    for(let i = 0; i < min(frameCount*2,10000); i++){
      let v = createVector(random(width), random(height));
      let n = noise(v.x/150, v.y/150);
      if(n > random()){
          //points.push(v);
          circle(v.x, v.y,1);
      }
    }








}

function mousePressed(){ ox.mousePressed(); }
function mouseReleased(){ ox.mouseReleased(); }
function mouseDragged(){ ox.mouseDragged(); }
