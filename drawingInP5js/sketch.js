let bigDipper
// let x1, y1, x2, y2;

function setup(){
  createCanvas(700, 700);
  bigDipper = new Constellation(30, 50, 60, 70, 80, 90);
}

//#region Draw
function draw() {
  background("#0E1346");
  bigDipper.draw();

  if (isDragging) {
    line(x1, y1, x2, y2);
  }

  x2 = mouseX;
  y2 = mouseY;
}
//#endregion

function drawLine(x, y){
	line(x, y, mouseX, mouseY)
}

let isDragging = false;
let x1, y1, x2, y2;

function mousePressed() {
  if (!isDragging) {
    x1 = pmouseX;
    y1 = pmouseY;
    isDragging = true;
  }

  else if (isDragging) {
	isDragging = false;
  }
}

class Constellation {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7){
    this.v1 = [x1, y1];
    this.v2 = [x2, y2];
    this.v3 = [x3, y3];
	this.v4 = [x4, y4];
    this.v5 = [x5, y5];
    this.v6 = [x6, y6];
  }

  draw () {
	stroke("white");
	strokeWeight(3);
	beginShape(POINTS);
    vertex(this.v1[0], this.v1[1]);
    vertex(this.v2[0], this.v2[1]);
    vertex(this.v3[0], this.v3[1]);
	vertex(this.v4[0], this.v4[1]);
    vertex(this.v5[0], this.v5[1]);
    vertex(this.v6[0], this.v6[1]);
	endShape();
  }

  dragging(){
  }
}

/*
//#region Stars (Background)
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.6, 2);
		this.t = random(0, TAU);
	}

	draw() {
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 2;
		let opacity = this.size * 5;
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
		this.size = random(1, 2.49);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.03;
		var scale = this.size + sin(this.t) / 4;
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
//#endregion
*/