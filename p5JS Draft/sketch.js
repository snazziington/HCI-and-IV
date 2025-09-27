// Star twinkle by wvnl on p5js.org; https://editor.p5js.org/wvnl/sketches
var stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}

  customMousePointer();
}

function draw() {
  let time = frameCount*0.001
	let r = noise(0, 1, time) * 6 + 6;
  let g = noise(2, 3, time) * 6 + 6;
  let b = noise(4, 5, time) * 22 + 22;
  let a = 100;
  background(r, g, b, a);

	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}


// Star class
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 2);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) / 4;
    let opacity = this.size*15;
		noStroke();

    // Highlight
    fill (200, 195, 255, opacity);
    ellipse(this.x, this.y, scale*3, scale*3);

    // Star
    fill (200, 195, 255, opacity*10);
		ellipse(this.x, this.y, scale, scale);
	}
}

function customMousePointer(){
  cursor('https://raw.githubusercontent.com/snazziington/HCI-and-IV/refs/heads/main/big%20dipper.jpg?token=GHSAT0AAAAAADMBLIVM7F5I5NXAKT4F5MXG2GYJBMQ');
}