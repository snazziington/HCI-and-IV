//#region Initialising variables
let aries, taurus, gemini, cancer, leo
let lines = [];		// This is where the drawn lines will be stored
let constellations = [];
let distance = 20;		// How close you have to click on a constellation to be able to draw it (in pixels)
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
let button, libButton, quizButton, helpButton;
let testStars = [];
let constStarDiameter = 20;
let constStars = [aries, taurus, gemini, cancer, leo]

//#region Constellation Info
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

		// for each constellation, draw each star in its array
		for (let i = 0; i < constellations.length; i++) {

			for (let j = 1; j < 35; j++) {
				let vx = ("v" + j)

				// Size ranges from 3 to 5
				this.size = 3 + ((j % 21) / 10);
				this[vx][3] += random(0.007);
				var scale = this.size + sin(this[vx][3]) * 3 * this[vx][4];
				let opacity = this.size * 1;
				noStroke();

				// Glow
				fill(200, 195, 255, opacity);
				//fill(255, 0, 0, opacity);
				circle(this[vx][0], this[vx][1], scale * 3);

				// Star
				fill(200, 195, 255, opacity * 10);
				//fill(255, 0, 0, opacity * 10);
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

//#endregion



//#region Setup
function setup() {
	createCanvas(6000, 2000);
	for (let element of document.getElementsByClassName("p5Canvas")) {
		element.addEventListener("contextmenu", (e) => e.preventDefault());
	}
	stroke("white");

	// Stars
	for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}

	for (var i = 0; i < 750; i++) {
		bigStars[i] = new bigStar();
	}

	// empty default const (0th)
	constellations.push({ line: [0], completed: 1, startStars: [0] });
	setupConstellations();

	libButton = createButton('🕮')

	quizButton = createButton('Q')

	helpButton = createButton('⚙')
}
//#endregion



//#region Button Placement
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

//#endregion



//#region Set Up Constellations
function setupConstellations() {
	// Lower 200
	aries = new Constellation(4579, 423, 4707, 399, 4758, 407, 4770, 421);

	// Lower 200
	taurus = new Constellation(4599, 570, 4480, 583, 4409, 571, 4383, 579, 4359, 581, 4149, 589,
		4366, 540, 4308, 509, 4154, 479, 4452, 431, 4380, 552, 4400, 553)

	gemini = new Constellation(
		4045, 482, 4017, 500, 3994, 505, 3927, 484, 3982, 535, 3843, 434, 3885, 378,
		3778, 418, 3808, 468, 3753, 473, 3782, 485, 3761, 517, 3834, 540, 3847, 606, 3882, 549,
		3966, 588, 3951, 635);

	cancer = new Constellation(
		3577, 467, 3655, 485, 3588, 564, 3584, 606, 3543, 690, 3680, 717);

	leo = new Constellation(
		3385, 532, 3364, 502, 3291, 533, 3277, 577, 3315, 622, 3305, 683,
		3117, 553, 3108, 618, 3005, 612);

	virgo = new Constellation(
		2996, 711, 2877, 780, 2807, 779, 2776, 710, 2775, 612, 2642, 736,
		2561, 689, 2410, 647, 2648, 880, 2493, 842, 2492, 781, 2397, 758);

	libra = new Constellation(
		2358, 904, 2286, 812, 2223, 876, 2166, 897, 2303, 1019);

	scorpius = new Constellation(
		2134, 927, 2152, 966, 2145, 1010, 2060, 1014, 2041, 1035, 2004, 1113,
		1998, 1164, 1996, 1222, 1954, 1236, 1891, 1238, 1860, 1206, 1870, 1189,
		1892, 1158);

	sagittarius = new Constellation(
		1750, 963, 1838, 1043, 1715, 1027, 1790, 1084, 1745, 1083, 1748, 1144, 1773, 1174,
		1624, 1108, 1665, 1058, 1636, 1054, 1613, 985, 1594, 997, 1543, 968, 1526, 954,
		1605, 1082, 1503, 1065, 1427, 1133, 1480, 1238, 1533, 1328, 1610, 1276, 1634, 1335);

	capricornus = new Constellation(
		1343, 943, 1342, 974, 1316, 1119, 1226, 1047, 1308, 1144, 1194, 1127,
		1178, 1060, 1128, 1080, 1106, 1082);

	// Higher 200
	aquarius = new Constellation(
		1244, 836, 1226, 837, 1098, 839, 970, 815, 975, 923, 1042, 982, 951, 976,
		913, 1039, 914, 1075, 911, 1164, 925, 849, 896, 844, 875, 854, 865, 972,
		803, 1028, 864, 1176);

	// Higher 200
	pisces = new Constellation(
		741, 780, 727, 816, 680, 833, 666, 786, 695, 762, 604, 796, 538, 807,
		460, 849, 414, 863, 338, 919, 306, 942, 279, 986, 252, 1005, 273, 902,
		291, 799, 307, 667, 278, 636, 310, 564);

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
			name: "gemini",
			v1: gemini.v1, v2: gemini.v2, v3: gemini.v3, v4: gemini.v4,
			v5: gemini.v5, v6: gemini.v6, v7: gemini.v7, v8: gemini.v8,
			v9: gemini.v9, v10: gemini.v10, v11: gemini.v11, v12: gemini.v12,
			v13: gemini.v13, v14: gemini.v14, v15: gemini.v15, v16: gemini.v16,
			v17: gemini.v17,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [gemini.v1[0], gemini.v1[1], gemini.v1[2]]
		},

		{
			name: "cancer",
			v1: cancer.v1, v2: cancer.v2, v3: cancer.v3, v4: cancer.v4,
			v5: cancer.v5, v6: cancer.v6,
			line: [0, 0, 0, 0, 0],
			completed: 0,
			startStars: [cancer.v1[0], cancer.v1[1], cancer.v1[2]]
		},

		{
			name: "leo",
			v1: leo.v1, v2: leo.v2, v3: leo.v3, v4: leo.v4,
			v5: leo.v5, v6: leo.v6, v7: leo.v7, v8: leo.v8, v9: leo.v9,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [leo.v1[0], leo.v1[1], leo.v1[2]]
		},

		{
			name: "virgo",
			v1: virgo.v1, v2: virgo.v2, v3: virgo.v3, v4: virgo.v4,
			v5: virgo.v5, v6: virgo.v6, v7: virgo.v7, v8: virgo.v8,
			v9: virgo.v9, v10: virgo.v10, v11: virgo.v11, v12: virgo.v12,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [virgo.v1[0], virgo.v1[1], virgo.v1[2]]
		},

		{
			name: "libra",
			v1: libra.v1, v2: libra.v2, v3: libra.v3, v4: libra.v4, v5: libra.v5,
			line: [0, 0, 0, 0, 0],
			completed: 0,
			startStars: [libra.v1[0], libra.v1[1], libra.v1[2]]
		},

		{
			name: "scorpius",
			v1: scorpius.v1, v2: scorpius.v2, v3: scorpius.v3, v4: scorpius.v4,
			v5: scorpius.v5, v6: scorpius.v6, v7: scorpius.v7, v8: scorpius.v8,
			v9: scorpius.v9, v10: scorpius.v10, v11: scorpius.v11, v12: scorpius.v12,
			v13: scorpius.v13,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [scorpius.v1[0], scorpius.v1[1], scorpius.v1[2]]
		},

		{
			name: "sagittarius",
			v1: sagittarius.v1, v2: sagittarius.v2, v3: sagittarius.v3, v4: sagittarius.v4,
			v5: sagittarius.v5, v6: sagittarius.v6, v7: sagittarius.v7, v8: sagittarius.v8,
			v9: sagittarius.v9, v10: sagittarius.v10, v11: sagittarius.v11, v12: sagittarius.v12,
			v13: sagittarius.v13, v14: sagittarius.v14, v15: sagittarius.v15, v16: sagittarius.v16,
			v17: sagittarius.v17, v18: sagittarius.v18, v19: sagittarius.v19, v20: sagittarius.v20,
			v21: sagittarius.v21,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [sagittarius.v1[0], sagittarius.v1[1], sagittarius.v1[2]]
		},

		{
			name: "capricornus",
			v1: capricornus.v1, v2: capricornus.v2, v3: capricornus.v3, v4: capricornus.v4,
			v5: capricornus.v5, v6: capricornus.v6, v7: capricornus.v7, v8: capricornus.v8,
			v9: capricornus.v9,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0,
			startStars: [capricornus.v1[0], capricornus.v1[1], capricornus.v1[2]]
		},

		{
			name: "aquarius",
			v1: aquarius.v1, v2: aquarius.v2, v3: aquarius.v3, v4: aquarius.v4,
			v5: aquarius.v5, v6: aquarius.v6, v7: aquarius.v7, v8: aquarius.v8,
			v9: aquarius.v9, v10: aquarius.v10, v11: aquarius.v11, v12: aquarius.v12,
			v13: aquarius.v13, v14: aquarius.v14, v15: aquarius.v15, v16: aquarius.v16,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15 connections
			completed: 0,
			startStars: [aquarius.v1[0], aquarius.v1[1], aquarius.v1[2]]
		},

		{
			name: "pisces",
			v1: pisces.v1, v2: pisces.v2, v3: pisces.v3, v4: pisces.v4,
			v5: pisces.v5, v6: pisces.v6, v7: pisces.v7, v8: pisces.v8,
			v9: pisces.v9, v10: pisces.v10, v11: pisces.v11, v12: pisces.v12,
			v13: pisces.v13, v14: pisces.v14, v15: pisces.v15, v16: pisces.v16,
			v17: pisces.v17, v18: pisces.v18,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 19 connections
			completed: 0,
			startStars: [pisces.v1[0], pisces.v1[1], pisces.v1[2]]
		},

	);
}

//#endregion



//#region Draw 
function draw() {
	translate(0, -200);
	dilatingStroke = ((sin(frameCount * 0.04) + 1) * 10) + 5

	background("#0E1346");
	buttonPlacement();
	// Navigation
	cameraPanning();
	translate(translationX, translationY);
	newMouseX = mouseX - translationX;
	newMouseY = mouseY - translationY + 200;

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
	virgo.draw();
	libra.draw();
	scorpius.draw();
	sagittarius.draw();
	capricornus.draw();
	aquarius.draw();
	pisces.draw();

	// if you are not drawing, check whether you're hovering a constellation's starting star
	// and set that constellation's value to currentConstellation
	if (!isDrawing) {
		stroke("white");
		strokeWeight(3);
		constellationCheck();
	}

	if (isDrawing) {

		for (let i = 1; i < constellations.length; i++) {
			constellations[i].v1[4] = 1;
		}

		stroke("white");
		strokeWeight(2);
		line(x1, y1, x2, y2);

		stroke(255, 255, 255, 30)
		strokeWeight(dilatingStroke / 2);
		line(x1, y1, x2, y2);

		stroke(255, 255, 255, 15)
		strokeWeight(dilatingStroke);
		line(x1, y1, x2, y2);

		checkNextStars(currentConstellation);
		neighbouringStarsGlow();
	}

	x2 = newMouseX;
	y2 = newMouseY;
	stroke("#adaedfff")

	// Ensures that the finished constellations still pulse
	strokeWeight(((sin(frameCount * 0.015) + 3.5)));
	lines.forEach((l) => line(l.x1, l.y1, l.x2, l.y2));
}
//#endregion



//#region Drawing Constellations
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
let polySynth;
let soundEffectsOn = 0;

function mousePressed() {
	if (soundEffectsOn == 0) {
		polySynth = new p5.PolySynth();
		soundEffectsOn = 1;
	}
	// if not drawing, and mouse is near a starting star
	// and the constellation isn't completed

	if (!isDrawing && canDraw == 1 && constellations[currentConstellation].completed == 0 && mouseButton === LEFT && keyIsDown(32) == false) {
		soundEffects(1); // "start drawing" sound
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
				soundEffects(2); // "continue drawing next star" sound

				// Draws line, and ensures it is centered on stars
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
				// Push the current star you are drawing on into the startStars thing.
				// Prevents duplicates
				if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][0]) === -1)
					constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][0]));
				if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][1]) === -1)
					constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][1]));
				if (constellations[currentConstellation].startStars.indexOf(constellations[currentConstellation][currentStarV][2]) === -1)
					constellations[currentConstellation].startStars.push((constellations[currentConstellation][currentStarV][2]));
			}

			// if you click right button on mouse, stop drawing
			else if (mouseButton === RIGHT) {
				currentStarV = ("v" + currentStar)

				// sets the next line to begin on the star near the mouse
				x1 = neighbouringStars[i][0];
				y1 = neighbouringStars[i][1];
				soundEffects(3); // "stopped drawing" sound
				isDrawing = false;
				break;
			}
		}
	}

	else if (!isDrawing && mouseButton === LEFT && !keyIsDown(32)) {
		soundEffects(0); // "cannot start drawing here" sound
	}
}

let startingStarScale = 1;

function constellationCheck() {
	// for each constellation
	for (let i = 1; i < constellations.length; i++) {

		// check if hovering near any of the constellation's starting Stars
		for (let j = 0; j < constellations[i].startStars.length - 1; j = j + 3) {

			if (isDrawing != 1) {
				// if mouse within dist * 15, starting star starts to glow
				if (dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
					newMouseX, newMouseY) < 500) {

					// and no lines have been drawn!!!!
					if (constellations[i].completed == 0 && constellations[i].line.every(noLinesDrawn)) {
						startingStarScale = map((abs(dist(newMouseX, newMouseY, constellations[i].startStars[j], constellations[i].startStars[j + 1]))), 0, 500, 7, 4)
						//constellations[i].v1[4] = startingStarScale
						constellations[i].v1[4] += (startingStarScale - constellations[i].v1[4]) * 0.2
					}

					else if (constellations[i].completed == 1) {
						constellations[i].v1[4] = 1;
					}
				}

				else {
					//alpha += (newAlpha - alpha) * 0.2;
					constellations[i].v1[4] += (1 - constellations[i].v1[4]) * 0.01
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
//#endregion



//#region Glow Neighbouring Stars
let alpha = 10

function neighbouringStarsGlow() {
	for (let i = 0; i < neighbouringStars.length; i++) {
		// If mouse is within range of a neighbouring star, that neighbouring star should glow
		if (constellations[currentConstellation].completed == 0) {
			noStroke();
			let newAlpha = 255 - constrain(map(dist(newMouseX, newMouseY, neighbouringStars[i][0],
				neighbouringStars[i][1]), 0, 500, 0, 80), 0, 145);
			alpha += (newAlpha - alpha) * 0.2;
			fill(13, 0, 255, alpha)
			let diameter = ((sin(frameCount * 0.08) + 2) * 10) + 6;
			blendMode(OVERLAY);
			circle(neighbouringStars[i][0], neighbouringStars[i][1], diameter);
			blendMode(BLEND);
			fill(255, 40)
			circle(neighbouringStars[i][0], neighbouringStars[i][1], diameter);
		}
	}
}
//#endregion



//#region Constellation Data
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
					neighbouringStars = [taurus.v2];
					break;
				case 2:
					neighbouringStars = [taurus.v1, taurus.v3];
					break;
				case 3:
					neighbouringStars = [taurus.v2, taurus.v4, taurus.v12];
					break;
				case 4:
					neighbouringStars = [taurus.v3, taurus.v5];
					break;
				case 5:
					neighbouringStars = [taurus.v4, taurus.v6, taurus.v7];
					break;
				case 6:
					neighbouringStars = [taurus.v5];
					break;
				case 7:
					neighbouringStars = [taurus.v5, taurus.v8, taurus.v11,];
					break;
				case 8:
					neighbouringStars = [taurus.v7, taurus.v9];
					break;
				case 9:
					neighbouringStars = [taurus.v8];
					break;
				case 10:
					neighbouringStars = [taurus.v12];
					break;
				case 11:
					neighbouringStars = [taurus.v7, taurus.v12];
					break;
				case 12:
					neighbouringStars = [taurus.v11, taurus.v3, taurus.v10];
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

		case 3: // Gemini
			switch (currentStar) {

				case 1:
					neighbouringStars = [gemini.v2]
					break;

				case 2:
					neighbouringStars = [gemini.v1, gemini.v3]
					break;

				case 3:
					neighbouringStars = [gemini.v2, gemini.v4]
					break;

				case 4:
					neighbouringStars = [gemini.v3, gemini.v5, gemini.v6]
					break;

				case 5:
					neighbouringStars = [gemini.v4]
					break;

				case 6:
					neighbouringStars = [gemini.v4, gemini.v7, gemini.v8, gemini.v9]
					break;

				case 7:
					neighbouringStars = [gemini.v6]
					break;

				case 8:
					neighbouringStars = [gemini.v6]
					break;

				case 9:
					neighbouringStars = [gemini.v6, gemini.v11]
					break;

				case 10:
					neighbouringStars = [gemini.v11]
					break;

				case 11:
					neighbouringStars = [gemini.v9, gemini.v10, gemini.v12, gemini.v13]
					break;

				case 12:
					neighbouringStars = [gemini.v11]
					break;

				case 13:
					neighbouringStars = [gemini.v11, gemini.v14, gemini.v15]
					break;

				case 14:
					neighbouringStars = [gemini.v13, gemini.v17]
					break;

				case 15:
					neighbouringStars = [gemini.v13, gemini.v16]
					break;

				case 16:
					neighbouringStars = [gemini.v15]
					break;

				case 17:
					neighbouringStars = [gemini.v14]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 11 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 11)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 13 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 13)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 14 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 14)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[15] = 1;
			}

			break;

		case 4: // Cancer
			switch (currentStar) {

				case 1:
					neighbouringStars = [cancer.v3]
					break;

				case 2:
					neighbouringStars = [cancer.v3]
					break;

				case 3:
					neighbouringStars = [cancer.v1, cancer.v2, cancer.v4]
					break;

				case 4:
					neighbouringStars = [cancer.v3, cancer.v5, cancer.v6]
					break;

				case 5:
					neighbouringStars = [cancer.v4]
					break;

				case 6:
					neighbouringStars = [cancer.v4]
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 5: // Leo
			switch (currentStar) {

				case 1:
					neighbouringStars = [leo.v2]
					break;

				case 2:
					neighbouringStars = [leo.v1, leo.v3]
					break;

				case 3:
					neighbouringStars = [leo.v2, leo.v4]
					break;

				case 4:
					neighbouringStars = [leo.v3, leo.v5, leo.v7]
					break;

				case 5:
					neighbouringStars = [leo.v4, leo.v6]
					break;

				case 6:
					neighbouringStars = [leo.v5, leo.v8]
					break;

				case 7:
					neighbouringStars = [leo.v4, leo.v8, leo.v9]
					break;

				case 8:
					neighbouringStars = [leo.v6, leo.v7, leo.v9]
					break;

				case 9:
					neighbouringStars = [leo.v7, leo.v8]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 7 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 7)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[8] = 1;
			}
			break;

		case 6: // Virgo
			switch (currentStar) {

				case 1:
					neighbouringStars = [virgo.v2];
					break;

				case 2:
					neighbouringStars = [virgo.v1, virgo.v3];
					break;

				case 3:
					neighbouringStars = [virgo.v2, virgo.v4, virgo.v9];
					break;

				case 4:
					neighbouringStars = [virgo.v3, virgo.v5, virgo.v6];
					break;

				case 5:
					neighbouringStars = [virgo.v4];
					break;

				case 6:
					neighbouringStars = [virgo.v4, virgo.v7, virgo.v9];
					break;

				case 7:
					neighbouringStars = [virgo.v6, virgo.v8];
					break;

				case 8:
					neighbouringStars = [virgo.v7];
					break;

				case 9:
					neighbouringStars = [virgo.v3, virgo.v6, virgo.v10];
					break;

				case 10:
					neighbouringStars = [virgo.v9, virgo.v11];
					break;

				case 11:
					neighbouringStars = [virgo.v10, virgo.v12];
					break;

				case 12:
					neighbouringStars = [virgo.v11];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 7: // Libra
			switch (currentStar) {
				case 1:
					neighbouringStars = [libra.v2, libra.v5];
					break;

				case 2:
					neighbouringStars = [libra.v1, libra.v3];
					break;

				case 3:
					neighbouringStars = [libra.v2, libra.v4, libra.v5];
					break;

				case 4:
					neighbouringStars = [libra.v3];
					break;

				case 5:
					neighbouringStars = [libra.v1, libra.v3];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 8: // Scorpius
			switch (currentStar) {

				case 1:
					neighbouringStars = [scorpius.v4];
					break;

				case 2:
					neighbouringStars = [scorpius.v4];
					break;

				case 3:
					neighbouringStars = [scorpius.v4];
					break;

				case 4:
					neighbouringStars = [scorpius.v1, scorpius.v2, scorpius.v3, scorpius.v5];
					break;

				case 5:
					neighbouringStars = [scorpius.v4, scorpius.v6];
					break;

				case 6:
					neighbouringStars = [scorpius.v5, scorpius.v7];
					break;

				case 7:
					neighbouringStars = [scorpius.v6, scorpius.v8];
					break;

				case 8:
					neighbouringStars = [scorpius.v7, scorpius.v9];
					break;

				case 9:
					neighbouringStars = [scorpius.v8, scorpius.v10];
					break;

				case 10:
					neighbouringStars = [scorpius.v9, scorpius.v11];
					break;

				case 11:
					neighbouringStars = [scorpius.v10, scorpius.v12];
					break;

				case 12:
					neighbouringStars = [scorpius.v11, scorpius.v13];
					break;

				case 13:
					neighbouringStars = [scorpius.v12];
					break;
			}

			if ((previousStar == 1 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
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

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 9: // Sagittarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [sagittarius.v3];
					break;

				case 2:
					neighbouringStars = [sagittarius.v4];
					break;

				case 3:
					neighbouringStars = [sagittarius.v1, sagittarius.v5, sagittarius.v9];
					break;

				case 4:
					neighbouringStars = [sagittarius.v2, sagittarius.v5, sagittarius.v6];
					break;

				case 5:
					neighbouringStars = [sagittarius.v3, sagittarius.v4, sagittarius.v6, sagittarius.v9];
					break;

				case 6:
					neighbouringStars = [sagittarius.v4, sagittarius.v5, sagittarius.v7, sagittarius.v8];
					break;

				case 7:
					neighbouringStars = [sagittarius.v6];
					break;

				case 8:
					neighbouringStars = [sagittarius.v6, sagittarius.v9, sagittarius.v15];
					break;

				case 9:
					neighbouringStars = [sagittarius.v3, sagittarius.v5, sagittarius.v8, sagittarius.v10];
					break;

				case 10:
					neighbouringStars = [sagittarius.v9, sagittarius.v11, sagittarius.v15];
					break;

				case 11:
					neighbouringStars = [sagittarius.v10, sagittarius.v12];
					break;

				case 12:
					neighbouringStars = [sagittarius.v11, sagittarius.v13];
					break;

				case 13:
					neighbouringStars = [sagittarius.v12, sagittarius.v14];
					break;

				case 14:
					neighbouringStars = [sagittarius.v13];
					break;

				case 15:
					neighbouringStars = [sagittarius.v8, sagittarius.v10, sagittarius.v16];
					break;

				case 16:
					neighbouringStars = [sagittarius.v15, sagittarius.v17];
					break;

				case 17:
					neighbouringStars = [sagittarius.v16, sagittarius.v18];
					break;

				case 18:
					neighbouringStars = [sagittarius.v17, sagittarius.v19];
					break;

				case 19:
					neighbouringStars = [sagittarius.v18, sagittarius.v20, sagittarius.v21];
					break;

				case 20:
					neighbouringStars = [sagittarius.v19];
					break;

				case 21:
					neighbouringStars = [sagittarius.v19];
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 5 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 5)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 9 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 9)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 8 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 8)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 8 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 8)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 15 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 15)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[15] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[16] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[17] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[18] = 1;
			}

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16)) {
				constellations[currentConstellation].line[19] = 1;
			}

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17)) {
				constellations[currentConstellation].line[20] = 1;
			}

			else if ((previousStar == 18 && currentStar == 19) ||
				(previousStar == 19 && currentStar == 18)) {
				constellations[currentConstellation].line[21] = 1;
			}

			else if ((previousStar == 19 && currentStar == 20) ||
				(previousStar == 20 && currentStar == 19)) {
				constellations[currentConstellation].line[22] = 1;
			}

			else if ((previousStar == 19 && currentStar == 21) ||
				(previousStar == 21 && currentStar == 19)) {
				constellations[currentConstellation].line[23] = 1;
			}

			break;

		case 10: // Capricornus
			switch (currentStar) {

				case 1:
					neighbouringStars = [capricornus.v2];
					break;

				case 2:
					neighbouringStars = [capricornus.v1, capricornus.v3, capricornus.v4];
					break;

				case 3:
					neighbouringStars = [capricornus.v2];
					break;

				case 4:
					neighbouringStars = [capricornus.v2, capricornus.v5, capricornus.v6, capricornus.v7];
					break;

				case 5:
					neighbouringStars = [capricornus.v4];
					break;

				case 6:
					neighbouringStars = [capricornus.v4, capricornus.v7];
					break;

				case 7:
					neighbouringStars = [capricornus.v4, capricornus.v6, capricornus.v8];
					break;

				case 8:
					neighbouringStars = [capricornus.v7, capricornus.v9];
					break;

				case 9:
					neighbouringStars = [capricornus.v8];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 7 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 7))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			break;

		case 11: // Aquarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [aquarius.v2];
					break;

				case 2:
					neighbouringStars = [aquarius.v1, aquarius.v3];
					break;

				case 3:
					neighbouringStars = [aquarius.v2, aquarius.v4];
					break;

				case 4:
					neighbouringStars = [aquarius.v3, aquarius.v5, aquarius.v11];
					break;

				case 5:
					neighbouringStars = [aquarius.v4, aquarius.v6, aquarius.v7];
					break;

				case 6:
					neighbouringStars = [aquarius.v5];
					break;

				case 7:
					neighbouringStars = [aquarius.v5, aquarius.v8];
					break;

				case 8:
					neighbouringStars = [aquarius.v7, aquarius.v9];
					break;

				case 9:
					neighbouringStars = [aquarius.v8, aquarius.v10];
					break;

				case 10:
					neighbouringStars = [aquarius.v9];
					break;

				case 11:
					neighbouringStars = [aquarius.v4, aquarius.v12];
					break;

				case 12:
					neighbouringStars = [aquarius.v11, aquarius.v13];
					break;

				case 13:
					neighbouringStars = [aquarius.v12, aquarius.v14];
					break;

				case 14:
					neighbouringStars = [aquarius.v13, aquarius.v15];
					break;

				case 15:
					neighbouringStars = [aquarius.v14, aquarius.v16];
					break;

				case 16:
					neighbouringStars = [aquarius.v15];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[14] = 1;

			break;

		case 12: // Pisces
			switch (currentStar) {

				case 1:
					neighbouringStars = [pisces.v2, pisces.v5];
					break;

				case 2:
					neighbouringStars = [pisces.v1, pisces.v3];
					break;

				case 3:
					neighbouringStars = [pisces.v2, pisces.v4];
					break;

				case 4:
					neighbouringStars = [pisces.v3, pisces.v5, pisces.v6];
					break;

				case 5:
					neighbouringStars = [pisces.v1, pisces.v4];
					break;

				case 6:
					neighbouringStars = [pisces.v4, pisces.v7];
					break;

				case 7:
					neighbouringStars = [pisces.v6, pisces.v8];
					break;

				case 8:
					neighbouringStars = [pisces.v7, pisces.v9];
					break;

				case 9:
					neighbouringStars = [pisces.v8, pisces.v10];
					break;

				case 10:
					neighbouringStars = [pisces.v9, pisces.v11];
					break;

				case 11:
					neighbouringStars = [pisces.v10, pisces.v12];
					break;

				case 12:
					neighbouringStars = [pisces.v11, pisces.v13];
					break;

				case 13:
					neighbouringStars = [pisces.v12, pisces.v14];
					break;

				case 14:
					neighbouringStars = [pisces.v13, pisces.v15];
					break;

				case 15:
					neighbouringStars = [pisces.v14, pisces.v16];
					break;

				case 16:
					neighbouringStars = [pisces.v15, pisces.v17, pisces.v18];
					break;

				case 17:
					neighbouringStars = [pisces.v16, pisces.v18];
					break;

				case 18:
					neighbouringStars = [pisces.v16, pisces.v17];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[14] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[15] = 1;

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16))
				constellations[currentConstellation].line[16] = 1;

			else if ((previousStar == 16 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 16))
				constellations[currentConstellation].line[17] = 1;

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17))
				constellations[currentConstellation].line[18] = 1;
			break;
	}

	// allLinesDrawn = method which returns true if all lines have been drawn
	const allLinesDrawn = (value) => value == 1;

	if (constellations[currentConstellation].line.every(allLinesDrawn)) {
		constellations[currentConstellation].completed = 1;
		soundEffects(4); // "completed constellation" sound
	}

	if (constellations[currentConstellation].completed == 1) {
		isDrawing = false;
	}
}
//#endregion



//#region Navigation
let mouseStartX, mouseStartY;
let prevTranslationX = 0, prevTranslationY = 0;

// (mouseIsPressed == true && mouseButton == CENTER)

function cameraPanning() { 
	if (keyIsDown(32)) {
		cursor('grab');
	}

	if ((keyIsDown(32) && (mouseDragging == true) && (mouseButton === LEFT)) ||
		 (mouseIsPressed == true && mouseButton == CENTER)) {
		if (panningCamera == false){
			mouseStartX = mouseX;
			mouseStartY = mouseY;
		}
		cursor('grab');
		panningCamera = true;
		
		translationX = constrain((prevTranslationX - mouseStartX + mouseX), -6000 + windowWidth - 20, 500);
		translationY = constrain((prevTranslationY - mouseStartY + mouseY), -1500 + windowHeight - 20, 300);
	}

	else if (mouseDragging == false) {
		prevTranslationX = translationX;
		prevTranslationY = translationY;
		mouseStartX = mouseX;
		mouseStartY = mouseY;
		panningCamera = false;
	}
}

function mouseDragged() {
	mouseDragging = true;
}

function mouseReleased() {
	mouseDragging = false;
 	cursor(ARROW);
}

function keyReleased() {
	mouseDragging = false;
	cursor(ARROW);
}

//#endregion



//#region Stars (Background)
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height + 200);
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
		this.x = random(width + 500) - 500;
		this.y = random(height + 300) - 300;
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
//#endregion

let notes4 = [];
let notesInt = 0;
let oldestNote;

//#region Sound Effects
function soundEffects(n) {	
	/*0. cannotStartHere
	1. startDrawing
	2. continuedToNextStar
	3. stoppedDrawing
	4. completedConstellation*/

	let velocity = 0.1;
	let dur = 1 / 3;
	notesInt = (notesInt + round(random(1, 3))) % 4;

	if (constellations[currentConstellation].completed == 1 && n == 4) {
		// Would love it if the chord that plays corresponds to the next
		// note in the notesInt sequence
		notes4 = ['F4', 'A5', 'C5', 'F5'];
		polySynth.play(notes4[0], velocity, 0, dur);
		polySynth.play(notes4[1], velocity, 0.1, dur);
		polySynth.play(notes4[2], velocity, 0.2, dur);
		polySynth.play(notes4[3], velocity, 0.2, dur);
	}

	else {
		switch (n) {
			case 0:
				//cannotStartHere
				polySynth.play('F5', velocity / 10, 0, 0.3);
				polySynth.play('F4', velocity, 0, 0.3);
				polySynth.play('F3', velocity / 2, 0, 0.3);

				polySynth.play('F5', velocity / 10, 0.2, 0.15);
				polySynth.play('F4', velocity, 0.2, 0.15);
				polySynth.play('F3', velocity / 2, 0.2, 0.15);
				break;
			case 1:
				//startDrawing
				polySynth.play('F4', velocity, 0, dur);
				polySynth.play('C5', velocity, 0.1, dur);

				polySynth.play('F3', velocity / 5, 0, dur);
				polySynth.play('C4', velocity / 5, 0.1, dur);
				break;
			case 2:
				//continuedToNextStar
				let notes2 = ['C4', 'E4', 'F4', 'A5', 'C5', 'E5', 'F5'];
				polySynth.play(notes2[notesInt], velocity, 0, dur);
				break;
			case 3:
				//stoppedDrawing
				polySynth.play('F5', velocity / 10, 0, 0.3);
				polySynth.play('F4', velocity, 0, 0.3);
				polySynth.play('F3', velocity / 2, 0, 0.3);
				break;
		}
	}
}
//#endregion
