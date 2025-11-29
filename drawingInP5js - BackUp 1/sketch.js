let bigDipper;
let bigDipperLine = [0, 0, 0, 0];
let lines = [];		// this is where lines will be stored
let constellations = [];
let distance = 15;
let mouseDragging = false;
let panningCamera = false;

class Constellation {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7) {
		this.v1 = [x1, y1, 1];
		this.v2 = [x2, y2, 2];
		this.v3 = [x3, y3, 3];
		this.v4 = [x4, y4, 4];
		this.v5 = [x5, y5, 5];
		this.v6 = [x6, y6, 6];
	}

	draw() {
		//stroke("white");
		fill("pink");
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
}

function setup() {
	createCanvas(700, 700);
	stroke("white");

	// empty default const
	constellations.push({ line: [0], completed: 1, startStars: [0] });

	bigDipper = new Constellation(130, 300, 360, 370, 20, 150, 480, 90);

	constellations.push({
		v1: bigDipper.v1, v2: bigDipper.v2,
		v3: bigDipper.v3, v4: bigDipper.v4,
		line: [0, 0, 0, 0], completed: 0, bigDipper,
		startStars: [bigDipper.v1[0], bigDipper.v1[1]]
	});
}

let number = 2;
let value = 'v2'

//#region Draw
function draw() {
	cursor(ARROW);
	background("#0E1346");
	bigDipper.draw();

	if (isDrawing) {
		line(x1, y1, x2, y2);
	}

	x2 = mouseX;
	y2 = mouseY;
	lines.forEach((l) => line(l.x1, l.y1, l.x2, l.y2));

	constellationCheck();

	if (isDrawing) {
		checkNextStars(currentConstellation)
	}
	cameraPanning();
	print(currentStar);
}
//#endregion

let isDrawing = false;
let x1, y1, x2, y2;
let nearestStar = [];
let canDraw = 0;
let currentConstellation = 0;
let neighbouringStars = [];
let completedDrawing = 0;
let currentStar;
let currentStarV;
let previousStar;

const noLinesDrawn = (value) => value == 0;

function mousePressed() {
	// if not drawing, and mouse is near a starting star
	// and the constellation isn't completed

	if (!isDrawing && canDraw == 1 && constellations[currentConstellation].completed == 0) {
		x1 = nearestStar[0];
		y1 = nearestStar[1];
		isDrawing = true;

		if ((constellations[currentConstellation].line.every(noLinesDrawn))){
			currentStar = 1;
		}
		
	}

	else if (isDrawing) { // if user is drawing

		// check for all neighbouring stars
		for (let i = 0; i < neighbouringStars.length; i++) {

			// if mouse is near a neighbouring star which is part of a constellation that hasn't
			// been drawn yet, start drawing from that star
			if ((dist(mouseX, mouseY, neighbouringStars[i][0],
				neighbouringStars[i][1])) < distance &&
				constellations[currentConstellation].completed == 0) {
				// draws line, and ensures it is centered on stars
				lines.push({
					x1, y1, x2: neighbouringStars[i][0],
					y2: neighbouringStars[i][1]
				});

				// sets previous star to the star the user drew the line from
				// sets current star to the one the user just drew to
				previousStar = currentStar;
				currentStar = neighbouringStars[i][2];
				currentStarV = ("v" + currentStar)

				// sets the next line to begin on the star near the mouse
				x1 = neighbouringStars[i][0];
				y1 = neighbouringStars[i][1];
			}
			
			else if (mouseButton === CENTER) {
				if (constellations[currentConstellation].completed == 0
					&& !(constellations[currentConstellation].line.every(noLinesDrawn))
				) {
					constellations[currentConstellation].startStars.push(
						constellations[currentConstellation][currentStarV][0],
						constellations[currentConstellation][currentStarV][1]
					)
				}
				currentStarV = ("v" + currentStar)

				// sets the next line to begin on the star near the mouse
				x1 = neighbouringStars[i][0];
				y1 = neighbouringStars[i][1]; isDrawing = false;
			}
		}
	}
}

function constellationCheck() {
	// for each constellation
	for (let i = 0; i < constellations.length; i++) {

		// check every value in startStars
		for (let j = 0; j < constellations[i].startStars.length - 1; j = j + 2) {
			if (dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
				mouseX, mouseY) < distance) {
				currentConstellation = i;
				circle(mouseX, mouseY, 10);
				canDraw = 1;
				// nearestStar is starting star that is being hovered over
				nearestStar = [constellations[i].startStars[j],
				constellations[i].startStars[j + 1]];
			}
			
			//// commenting out the below 4 lines does some stuff
			else if (!isDrawing && dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
			mouseX, mouseY) > distance) {
			canDraw = 0;
			}
		}
	}
}

const withinDrawingRange = (distance) => distance < dist(constellations[i].v1[0],
	constellations[i].v1[1], mouseX, mouseY);

// Will probably have to do nested switch statements for the constellations here I think
function checkNextStars(currentConstellation) {
	switch (currentConstellation) { // Check which constellation we are currently drawing

		case 1: // 0 = Big Dipper
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [bigDipper.v2, bigDipper.v3]
					break;
				case 2:
					neighbouringStars = [bigDipper.v1, bigDipper.v4]
					break;
				case 3:
					neighbouringStars = [bigDipper.v1, bigDipper.v4]
					break;
				case 4:
					neighbouringStars = [bigDipper.v2, bigDipper.v3]
					break;
			}
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 1) ||
				(previousStar == 1 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}
	}

	// allLinesDrawn = method which returns true if all lines have been drawn
	const allLinesDrawn = (value) => value == 1;

	if (constellations[currentConstellation].line.every(allLinesDrawn)) {
		stroke("red");
		constellations[currentConstellation].completed = 1;
	}

	else if (constellations[currentConstellation].line.every(allLinesDrawn) == false) {
		stroke("white");
	}

	if (constellations[currentConstellation].completed == 1) {
		isDrawing = false;
	}
}

//#region Navigation
function cameraPanning() {
	if (keyIsDown(32)) {
		cursor('grab')
		if (mouseDragging == true && mouseButton === LEFT) {
			panningCamera = true;
		}

		else {
			panningCamera = false;
		}
	}

	if (panningCamera == true) {

	}
}

function mouseDragged() {
	mouseDragging = true;
}

function mouseReleased() {
	mouseDragging = false;
}

//#endregion