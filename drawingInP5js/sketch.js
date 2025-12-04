let aries, taurus, gemini, cancer, leo
let ariesStars = [];
let ariesLine = [0, 0, 0, 0];
let lines = [];		// this is where lines will be stored
let constellations = [];
let distance = 10;
let mouseDragging = false;
let panningCamera = false;

// Drawing
let dilatingStroke;

// Navigation
let translationX = 0;
let translationY = 0;

// Stars
let stars = [];
let bigStars = [];
let button, libButton, quizButton, helpButton
let testStars = [];
let constStarDiameter = 20;
let constStars = [aries, taurus, gemini, cancer, leo]

// some constellations are very. very big
class Constellation {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10,
		x11, y11, x12, y12, x13, y13, x14, y14, x15, y15, x16, y16, x17, y17, x18, y18,
		x19, y19, x20, y20, x21, y21, x22, y22, x23, y23, x24, y24, x25, y25, x26, y26,
		x27, y27, x28, y28, x29, y29, x30, y30, x31, y31, x32, y32, x33, y33, x34, y34,
		x35, y35) {
		this.v1 = [x1, y1, 1, random(TAU), 1]; this.v2 = [x2, y2, 2, random(TAU), 1]; this.v3 = [x3, y3, 3, random(TAU), 1]; this.v4 = [x4, y4, 4, random(TAU), 1];
		this.v5 = [x5, y5, 5, random(TAU), 1]; this.v6 = [x6, y6, 6, random(TAU), 1]; this.v7 = [x7, y7, 7, random(TAU), 1]; this.v8 = [x8, y8, 8, random(TAU), 1];
		this.v9 = [x9, y9, 9, random(TAU), 1]; this.v10 = [x10, y10, 10, random(TAU), 1]; this.v11 = [x11, y11, 11, random(TAU), 1]; this.v12 = [x12, y12, 12, random(TAU), 1];
		this.v13 = [x13, y13, 13, random(TAU), 1]; this.v14 = [x14, y14, 14, random(TAU), 1]; this.v15 = [x15, y15, 15, random(TAU), 1]; this.v16 = [x16, y16, 16, random(TAU), 1];
		this.v17 = [x17, y17, 17, random(TAU), 1]; this.v18 = [x18, y18, 18, random(TAU), 1]; this.v19 = [x19, y19, 19, random(TAU), 1]; this.v20 = [x20, y20, 20, random(TAU), 1];
		this.v21 = [x21, y21, 21, random(TAU), 1]; this.v22 = [x22, y22, 22, random(TAU), 1]; this.v23 = [x23, y23, 23, random(TAU), 1]; this.v24 = [x24, y24, 24, random(TAU), 1];
		this.v25 = [x25, y25, 25, random(TAU), 1]; this.v26 = [x26, y26, 26, random(TAU), 1]; this.v27 = [x27, y27, 27, random(TAU), 1]; this.v28 = [x28, y28, 28, random(TAU), 1];
		this.v29 = [x29, y29, 29, random(TAU), 1]; this.v30 = [x30, y30, 30, random(TAU), 1]; this.v31 = [x31, y31, 31, random(TAU), 1]; this.v32 = [x32, y32, 32, random(TAU), 1];
		this.v33 = [x33, y33, 33, random(TAU), 1]; this.v34 = [x34, y34, 34, random(TAU), 1]; this.v35 = [x35, y35, 35, random(TAU), 1];
	}

	draw() {
		strokeWeight(dilatingStroke / 3);
		if (this.completed == 1) {
			stroke("red");
		}

		else if (this.completed == 0) {
			stroke("white");
		}

		beginShape(POINTS);

		///--- for each constellation, draw each star in its array
		for (let i = 0; i < constellations.length; i++) {

			for (let j = 1; j < 35; j++) {
				let vx = ("v" + j)

				// ranges from 4 to 6
				this.size = 4 + ((j % 21) / 10);
				this[vx][3] += random(0.007);
				var scale = this.size + sin(this[vx][3]) * 3 * this[vx][4];
				let opacity = this.size * 1;
				noStroke();

				// Glow
				//fill(200, 195, 255, opacity);
				fill(255, 0, 0, opacity);
				circle(this[vx][0], this[vx][1], scale * 3);

				// Star
				//fill(200, 195, 255, opacity * 10);
				fill(255, 0, 0, opacity * 10);
				circle(this[vx][0], this[vx][1], scale);


			}
		}

		endShape();
	}

	completed() {
		stroke("red");
		strokeWeight(dilatingStroke / 3);
	}
}

function isStartingStar(star, list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i] === star) {
			return true;
		}
	}

	return false;
}

function setup() {
	createCanvas(4885, 1506);
	for (let element of document.getElementsByClassName("p5Canvas")) {
		element.addEventListener("contextmenu", (e) => e.preventDefault());
	}
	stroke("white");

	// Stars
	for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}

	for (var i = 0; i < 500 / 4; i++) {
		bigStars[i] = new bigStar();
	}

	// empty default const (0th)
	constellations.push({ line: [0], completed: 1, startStars: [0] });
	setupConstellations();

	//#region Sidebar Buttons
	libButton = createButton ('🕮')

	quizButton = createButton ('Q')

	helpButton = createButton ('⚙')
	
	//#endregion
}

function buttonPlacement() {
	if (windowWidth > 700) {
		libButton.position(0, 0);
		quizButton.position(0, 122);
		helpButton.position(0, 244);
	}

	else {
		libButton.position(windowWidth / 2.15 + 125, windowHeight * 0.89);
		quizButton.position(windowWidth / 2.15, windowHeight * 0.89);
		helpButton.position(windowWidth / 2.15 - 125, windowHeight * 0.89);
	}
}

function setupConstellations() {
	// Aries
	aries = new Constellation(4579, 223, 4707, 199, 4758, 207, 4770, 221);

	// Taurus
	taurus = new Constellation(4599, 470, 4480, 483, 4409, 471, 4383, 479, 4359, 481, 4149, 489,
		4366, 440, 4308, 409, 4154, 379, 4452, 331, 4380, 452, 4400, 453)

	gemini = new Constellation(4046, 483, 4017, 501, 3996, 505, 3930, 485, 3984, 536, 3846, 434,
		3887, 381, 3779, 421, 3810, 468, 3784, 485, 3756, 473, 3761, 516,
		3834, 539, 3882, 550, 3968, 588, 3849, 607, 3953, 636);

	cancer = new Constellation(3682, 719, 3587, 606, 3544, 694, 3589, 563, 3580, 467, 3656, 488);

	leo = new Constellation(3388, 533, 3368, 501, 3293, 532, 3280, 580, 3120, 552, 3004, 613,
		3112, 617, 3307, 684, 3316, 620);

	// pushes all of the constellation's values into the constellations array						
	constellations.push(
		{
			name: "aries", v1: aries.v1, v2: aries.v2, v3: aries.v3, v4: aries.v4,
			line: [0, 0, 0], completed: 0,
			startStars: [aries.v1[0], aries.v1[1], aries.v1[2]]
		},

		{
			name: "taurus", v1: taurus.v1, v2: taurus.v2, v3: taurus.v3, v4: taurus.v4,
			v5: taurus.v5, v6: taurus.v6, v7: taurus.v7, v8: taurus.v8,
			v9: taurus.v9, v10: taurus.v10, v11: taurus.v11, v12: taurus.v12,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], completed: 0,
			startStars: [taurus.v1[0], taurus.v1[1], taurus.v1[2]]
		},

		{
			name: "gemini", v1: gemini.v1, v2: gemini.v2, v3: gemini.v3, v4: gemini.v4,
			v5: gemini.v5, v6: gemini.v6, v7: gemini.v7, v8: gemini.v8,
			v9: gemini.v9, v10: gemini.v10, v11: gemini.v11, v12: gemini.v12,
			v13: gemini.v13, v14: gemini.v41, v15: gemini.v15, v16: gemini.v16,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], completed: 0,
			startStars: [gemini.v1[0], gemini.v1[1], gemini.v1[2]]
		},

		{
			name: "cancer", v1: cancer.v1, v2: cancer.v2, v3: cancer.v3, v4: cancer.v4, v5: cancer.v5,
			line: [0, 0, 0, 0, 0], completed: 0,
			startStars: [cancer.v1[0], cancer.v1[1], cancer.v1[2]]
		},

		{
			name: "leo", v1: leo.v1, v2: leo.v2, v3: leo.v3, v4: leo.v4,
			v5: leo.v5, v6: leo.v6, v7: leo.v7, v8: leo.v8,
			line: [0, 0, 0, 0, 0, 0, 0, 0], completed: 0,
			startStars: [leo.v1[0], leo.v1[1], leo.v1[2]]
		},

	);
}
//#region Draw
function draw() {
	dilatingStroke = ((sin(frameCount * 0.04) + 1) * 10) + 5
	
	background("#0E1346");
	buttonPlacement();

	// Navigation
	cameraPanning();
	translate(translationX, translationY);
	newMouseX = mouseX - translationX;
	newMouseY = mouseY - translationY;
	
	// Stars
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}

	for (var i = 0; i < bigStars.length; i++) {
		bigStars[i].draw();
	}

	fill("white")
	stroke("white")
	aries.draw();
	taurus.draw();
	gemini.draw();
	cancer.draw();
	leo.draw();

	// if you are not drawing, check whether you're hovering a constellation's starting star
	// and set that constellation's value to currentConstellation
	if (!isDrawing) {
		stroke("white");
		strokeWeight(3);
		constellationCheck();
	}

	if (isDrawing) {
		stroke("white");
		strokeWeight(2);
		line(x1, y1, x2, y2);

		stroke(255, 255, 255, 30)
		strokeWeight(dilatingStroke / 2);
		line(x1, y1, x2, y2);

		stroke(255, 255, 255, 15)
		strokeWeight(dilatingStroke);
		line(x1, y1, x2, y2);

		checkNextStars(currentConstellation)
	}

	x2 = newMouseX;
	y2 = newMouseY;
	stroke("#adaedfff")

	// Ensures that the finished constellations still pulse
	strokeWeight(((sin(frameCount * 0.015) + 3.5)));
	lines.forEach((l) => line(l.x1, l.y1, l.x2, l.y2));
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
		constellations[currentConstellation].v1[4] = 1;
		x1 = nearestStar[0];
		y1 = nearestStar[1];
		isDrawing = true;

		// if no lines have been drawn yet, the currentStar much be equal to 1 (the starting Star)
		if ((constellations[currentConstellation].line.every(noLinesDrawn))) {
			currentStar = 1;
		}
	}

	else if (isDrawing) { // if user is drawing

		// check for all neighbouring stars
		for (let i = 0; i < neighbouringStars.length; i++) {
			// if mouse is near a neighbouring star which is part of a constellation that hasn't
			// been drawn yet, start drawing from that star
			if ((dist(newMouseX, newMouseY, neighbouringStars[i][0],
				neighbouringStars[i][1])) < distance &&
				constellations[currentConstellation].completed == 0) {
				// draws line, and ensures it is centered on stars
				lines.push({
					x1, y1, x2: neighbouringStars[i][0], y2: neighbouringStars[i][1]
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

			// if you click center button on mouse
			else if (mouseButton === RIGHT) {
				// if you did not finish drawing the constellation and you have drawn at least
				// one line
				if (constellations[currentConstellation].completed == 0
					&& !(constellations[currentConstellation].line.every(noLinesDrawn))

					// push the current star you are drawing into the startStars thing.
				) {

					// prevents duplicates
					if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][0]) === -1)
						constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][0]));
					if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][1]) === -1)
						constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][1]));
					if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][2]) === -1)
						constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][2]));

					//constellations[currentConstellation].startStars.push(
					//	constellations[currentConstellation][currentStarV][0],
					//	constellations[currentConstellation][currentStarV][1]
					//)
				}
				currentStarV = ("v" + currentStar)

				// sets the next line to begin on the star near the mouse
				x1 = neighbouringStars[i][0];
				y1 = neighbouringStars[i][1]; isDrawing = false;
			}
		}
	}
}

function keyPressed() {
	lastKey = key;
}
let startingStarScale = 1;

function constellationCheck() {

	// for each constellation
	for (let i = 1; i < constellations.length; i++) {

		// check if hovering near any of the constellation's starting Stars
		for (let j = 0; j < constellations[i].startStars.length - 1; j = j + 3) {

			// if mouse within dist * 15, starting star starts to glow
			if (dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
				newMouseX, newMouseY) < distance * 15) {
				currentConstellation = i;

				startingStarScale = ((dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
					newMouseX, newMouseY)) - distance * 15) * - 0.1 + 1
				constellations[i].v1[4] = startingStarScale
				if (constellations[i].completed == 1) {
					constellations[i].v1[4] = 1;
				}
			}

			// if yes, set that star's constellation value to currentConstellation
			if (dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
				newMouseX, newMouseY) < distance) {
				currentConstellation = i;

				// this is the star value you are hovering over (integer)
				currentStar = (constellations[i].startStars[j + 2])

				// the nearestStar is the coordinates of the starting star that is being hovered over
				nearestStar = [constellations[i].startStars[j], constellations[i].startStars[j + 1]];

				// draws a circle so I know I am hovering over a startingStar
				circle(newMouseX, newMouseY, 10);

				// you can draw because you are hovering over a starting star
				canDraw = 1;

				if (canDraw == 1) { break; }
			}

			else {
				//if (canDraw)
				canDraw = 0;
			}
		}
		if (canDraw == 1) { break; }
	}
}

const withinDrawingRange = (distance) => distance < dist(constellations[i].v1[0],
	constellations[i].v1[1], newMouseX, newMouseY);

// Will probably have to do nested switch statements for the constellations here I think
function checkNextStars(currentConstellation) {
	switch (currentConstellation) { // Check which constellation we are currently drawing

		case 1: // 0 = aries
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [aries.v2]
					break;
				case 2:
					neighbouringStars = [aries.v1, aries.v3]
					break;
				case 3:
					neighbouringStars = [aries.v2, aries.v4]
					break;
				case 4:
					neighbouringStars = [aries.v3]
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}
			break;

		case 2: // 1 = taurus
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [taurus.v2]
					break;
				case 2:
					neighbouringStars = [taurus.v1, taurus.v3]
					break;
				case 3:
					neighbouringStars = [taurus.v2, taurus.v4, taurus.v12]
					break;
				case 4:
					neighbouringStars = [taurus.v3, taurus.v5]
					break;
				case 5:
					neighbouringStars = [taurus.v4, taurus.v6, taurus.v7]
					break;
				case 6:
					neighbouringStars = [taurus.v5]
					break;
				case 7:
					neighbouringStars = [taurus.v5, taurus.v8, taurus.v11,]
					break;
				case 8:
					neighbouringStars = [taurus.v7, taurus.v9]
					break;
				case 9:
					neighbouringStars = [taurus.v8]
					break;
				case 10:
					neighbouringStars = [taurus.v12]
					break;
				case 11:
					neighbouringStars = [taurus.v7, taurus.v11]
					break;
				case 12:
					neighbouringStars = [taurus.v11, taurus.v3, taurus.v10]
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 3 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 3)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 12 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 12)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 12 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 12)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;
	}

	// allLinesDrawn = method which returns true if all lines have been drawn
	const allLinesDrawn = (value) => value == 1;

	if (constellations[currentConstellation].line.every(allLinesDrawn)) {
		stroke("red");
		constellations[currentConstellation].completed = 1;
		//---let completedConstellation = constellations[currentConstellation];
		//completedConstellation['completed']();
	}

	else if (constellations[currentConstellation].line.every(allLinesDrawn) == false) {
		stroke("white");
	}

	if (constellations[currentConstellation].completed == 1) {
		isDrawing = false;
	}
}

let mouseStartX, mouseStartY;
let prevTranslationX = 0, prevTranslationY = 0;

//#region Navigation
function cameraPanning() {
	if (keyIsDown(32)) {
		cursor('grab')

		if (mouseDragging == false){
			prevTranslationX = translationX;
			prevTranslationY = translationY;
			mouseStartX = mouseX;
			mouseStartY = mouseY;
		}

		if (mouseDragging == true && mouseButton === LEFT) {
			panningCamera = true;
			translationX = (prevTranslationX - mouseStartX + mouseX);
			translationY = (prevTranslationY - mouseStartY + mouseY);
			circle(mouseX, mouseY, 0.2 * dist(mouseStartX, mouseStartY, mouseX, mouseY) * 0.2 + 10) 

  	    // Translate the origin.
			
		}

		else {
			panningCamera = false;
			//print(translationX, translationY)
		}
	}

	else {
		cursor(ARROW);
	}
}

function mouseDragged() {
	mouseDragging = true;
}

function mouseReleased() {
	mouseDragging = false;
}

//#endregion

//#region Stars (Background)
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.6, 2);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 2;
		let opacity = this.size * 5;
		noStroke();

		// Glow
		fill(200, 195, 255, opacity * 5);
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
		this.size = random(3, 5);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 3;
		let opacity = this.size * 5;
		noStroke();

		// Glow
		fill(200, 195, 255, opacity);
		ellipse(this.x, this.y, scale * 3, scale * 3);

		// Star
		fill(200, 195, 255, opacity * 10);
		ellipse(this.x, this.y, scale, scale);
	}
}

class constellationStar {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d
	}

	draw() {
		circle(this.x, this.y, this.d)
	}
}