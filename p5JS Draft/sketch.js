// Star twinkle by wvnl on p5js.org; https://editor.p5js.org/wvnl/sketches

var stars = [];
var bigStars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	//starImg = loadImage('/assets/star.png');
	for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}

	for (var i = 0; i < 300; i++) {
		bigStars[i] = new bigStar();
	}

}

function draw() {
	resizeCanvas(windowWidth, windowHeight);
	let time = frameCount * 0.001
	let r = noise(0, 1, time) * 6 + 6;
	let g = noise(2, 3, time) * 6 + 6;
	let b = noise(4, 5, time) * 22 + 22;
	let a = 100;
	background(r, g, b, a);
	cursor('/assets/star.png');
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}

	for (var i = 0; i < bigStars.length; i++) {
		bigStars[i].draw();
	}
	fill('white')
	circle(width / 2, height / 2, 4)
}


// Star class
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(2, 4);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) / 4;
		let opacity = this.size * 6;
		noStroke();

		// Highlight
		fill(200, 195, 255, opacity);
		ellipse(this.x, this.y, scale * 3, scale * 3);

		// Star
		fill(200, 195, 255, opacity * 10);
		ellipse(this.x, this.y, scale, scale);
	}
}

class bigStar {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.05, 2);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) / 1000;
		let opacity = this.size * 12;
		noStroke();

		// Highlight
		fill(200, 195, 255, opacity);
		ellipse(this.x, this.y, scale * 3, scale * 3);

		// Star
		fill(200, 195, 255, opacity * 10);
		ellipse(this.x, this.y, scale, scale);
	}
}