//#region Initialising variables
let Aries, Taurus, Gemini, Cancer, Leo
let lines = [];		// This is where the drawn lines will be stored
let constellations = [];
let distance = 20;		// How close you have to click on a constellation to be able to draw it (in pixels)
let mouseDragging = false;
let panningCamera = false;

// Drawing
let dilatingStroke;
let buttons = [];

// Navigation
var translationX = -1600;
let translationY = -500;

// Stars
let stars = [];
const maxStars = 100;
let button, libButton, quizButton, aboutButton, navButton;
//--fix later
let lib, quiz, quizAccessible = 0, detailedWindow, constDetailedWindow;

//#region Constellation Info
class Constellation {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10,
		x11, y11, x12, y12, x13, y13, x14, y14, x15, y15, x16, y16, x17, y17, x18, y18,
		x19, y19, x20, y20, x21, y21, x22, y22) {
		// "1, 0, 0" == startingStar scale,
		// starCompleted status, starVisible status (whether it has been next to the active star the user is drawing from)
		this.v1 = [x1, y1, 1, random(randomTAU), 1, 0, 0]; this.v2 = [x2, y2, 2, random(randomTAU), 1, 0, 0]; this.v3 = [x3, y3, 3, random(randomTAU), 1, 0, 0]; this.v4 = [x4, y4, 4, random(randomTAU), 1, 0, 0];
		this.v5 = [x5, y5, 5, random(randomTAU), 1, 0, 0]; this.v6 = [x6, y6, 6, random(randomTAU), 1, 0, 0]; this.v7 = [x7, y7, 7, random(randomTAU), 1, 0, 0]; this.v8 = [x8, y8, 8, random(randomTAU), 1, 0, 0];
		this.v9 = [x9, y9, 9, random(randomTAU), 1, 0, 0]; this.v10 = [x10, y10, 10, random(randomTAU), 1, 0, 0]; this.v11 = [x11, y11, 11, random(randomTAU), 1, 0, 0]; this.v12 = [x12, y12, 12, random(randomTAU), 1, 0, 0];
		this.v13 = [x13, y13, 13, random(randomTAU), 1, 0, 0]; this.v14 = [x14, y14, 14, random(randomTAU), 1, 0, 0]; this.v15 = [x15, y15, 15, random(randomTAU), 1, 0, 0]; this.v16 = [x16, y16, 16, random(randomTAU), 1, 0, 0];
		this.v17 = [x17, y17, 17, random(randomTAU), 1, 0, 0]; this.v18 = [x18, y18, 18, random(randomTAU), 1, 0, 0]; this.v19 = [x19, y19, 19, random(randomTAU), 1, 0, 0]; this.v20 = [x20, y20, 20, random(randomTAU), 1, 0, 0];
		this.v21 = [x21, y21, 21, random(randomTAU), 1, 0, 0]; this.v22 = [x22, y22, 22, random(randomTAU), 1, 0, 0];
	}

	draw() {
		beginShape(POINTS);

		// for each constellation, draw each star in its array
		for (let i = 0; i < constellations.length; i++) {
			for (let j = 1; j <= constellations[i].size; j++) {
				let vx = ("v" + j)

				// but only draw them if they're visible!
				if (leftBound < this[vx][0] && this[vx][0] < rightBound && topBound < this[vx][1] && this[vx][1] < bottomBound) {
					// Size ranges from 4.5 to 6.5
					this.size = 3 + ((j % 21) / 10);
					this[vx][3] += random(0.007);
					let scale = this.size + sin(this[vx][3]) * 2 * this[vx][4];
					let opacity = this.size * 1;
					noStroke();

					// Glow
					//fill('#1d2155')
					//fill("rgba(89, 99, 212, 0.31)")
					fill(110, 100, 255, opacity * 4);
					ellipse(this[vx][0], this[vx][1], scale * 3, scale * 3);

					// Star
					//fill('#aba8e2')
					//fill(255, 0, 0, opacity * 10);
					fill(210, 200, 255, opacity * 20);
					ellipse(this[vx][0], this[vx][1], scale, scale);
				}
			}
		}

		endShape();
	}
}
//#endregion



//#region Setup
function setup() {
	createCanvas(6000, 2000);
	constWindowWidth = windowWidth;
	constWindowHeight = windowHeight;

	// Prevents right-click from putting up the context menu
	for (let element of document.getElementsByClassName("p5Canvas")) {
		element.addEventListener("contextmenu", (e) => e.preventDefault());
	}

	// Initialises Stars
	for (var i = 0; i < maxStars; i++) {
		stars[i] = new Star();
	}

	// empty default const (0th)
	constellations.push({ line: [0], completed: 1, startStars: [0] });
	initialiseImages();
	setupConstellations();

	quiz = document.getElementById("quiz");
	quizButton = document.getElementById("quizMenuButton");
	quizButton.style.color = 'grey'
	quizButton.style.backgroundColor = 'hsla(230, 40%, 10%, 0.49)';

	about = document.getElementById("About");

	completedWindow = document.getElementById("completedWindow");
	detailedWindow = document.getElementById("detailedWindows");

	//--fix later
	imageAns = [AriesImg, TaurusImg, GeminiImg, LeoImg];
	nameAns = ["Aries", "Taurus", "Gemini", "Leo"];
	frameRate(30);
}

var AriesImg, TaurusImg, GeminiImg, CancerImg, LeoImg, VirgoImg, LibraImg,
	ScorpiusImg, SagittariusImg, CapricornusImg, AquariusImg, PiscesImg;

var imageAns = [], nameAns = [];

function initialiseImages() {
	AriesImg = document.getElementById("AriesImg").src;
	TaurusImg = document.getElementById("TaurusImg").src;
	GeminiImg = document.getElementById("GeminiImg").src;
	CancerImg = document.getElementById("CancerImg").src;
	LeoImg = document.getElementById("LeoImg").src;
	VirgoImg = document.getElementById("VirgoImg").src;
	LibraImg = document.getElementById("LibraImg").src;
	ScorpiusImg = document.getElementById("ScorpiusImg").src;
	SagittariusImg = document.getElementById("SagittariusImg").src;
	CapricornusImg = document.getElementById("CapricornusImg").src;
	AquariusImg = document.getElementById("AquariusImg").src;
	PiscesImg = document.getElementById("PiscesImg").src;
}
//#endregion



//#region Buttons
function hoveringMenuTrue() {
	hoveringMenus = 1;
	if (this.name == "quizButton") {
		quizMouseOver();
	}
}

function hoveringMenuFalse() {
	hoveringMenus = 0;
	if (this.name == "quizButton") {
		quizMouseOut();
	}
}
//#endregion



//#region Set Up Constellations
function setupConstellations() {
	// Lower 200
	Aries = new Constellation(4579, 423, 4707, 399, 4758, 407, 4770, 421);

	// Lower 200
	Taurus = new Constellation(4599, 570, 4480, 583, 4409, 571, 4383, 579, 4359, 581, 4149, 589,
		4366, 540, 4308, 509, 4154, 479, 4452, 431, 4380, 552, 4400, 553)

	Gemini = new Constellation(
		4045, 482, 4017, 500, 3994, 505, 3927, 484, 3982, 535, 3843, 434, 3885, 378,
		3778, 418, 3808, 468, 3753, 473, 3782, 485, 3761, 517, 3834, 540, 3847, 606, 3882, 549,
		3966, 588, 3951, 635);

	Cancer = new Constellation(
		3577, 467, 3655, 485, 3588, 564, 3584, 606, 3543, 690, 3680, 717);

	Leo = new Constellation(
		3385, 532, 3364, 502, 3291, 533, 3277, 577, 3315, 622, 3305, 683,
		3117, 553, 3108, 618, 3005, 612);

	Virgo = new Constellation(
		2996, 711, 2877, 780, 2807, 779, 2776, 710, 2775, 612, 2642, 736,
		2561, 689, 2410, 647, 2648, 880, 2493, 842, 2492, 781, 2397, 758);

	Libra = new Constellation(
		2358, 904, 2286, 812, 2223, 876, 2166, 897, 2303, 1019);

	Scorpius = new Constellation(
		2134, 927, 2152, 966, 2145, 1010, 2060, 1014, 2041, 1035, 2004, 1113,
		1998, 1164, 1996, 1222, 1954, 1236, 1891, 1238, 1860, 1206, 1870, 1189,
		1892, 1158);

	Sagittarius = new Constellation(
		1750, 963, 1838, 1043, 1715, 1027, 1790, 1084, 1745, 1083, 1748, 1144, 1773, 1174,
		1624, 1108, 1665, 1058, 1636, 1054, 1613, 985, 1594, 997, 1543, 968, 1526, 954,
		1605, 1082, 1503, 1065, 1427, 1133, 1480, 1238, 1533, 1328, 1610, 1276, 1634, 1335);

	Capricornus = new Constellation(
		1343, 943, 1342, 974, 1316, 1119, 1226, 1047, 1308, 1144, 1194, 1127,
		1178, 1060, 1128, 1080, 1106, 1082);

	// Higher 200
	Aquarius = new Constellation(
		1244, 836, 1226, 837, 1098, 839, 970, 815, 975, 923, 1042, 982, 951, 976,
		913, 1039, 914, 1075, 911, 1164, 925, 849, 896, 844, 875, 854, 865, 972,
		803, 1028, 864, 1176);

	// Higher 200
	Pisces = new Constellation(
		741, 780, 727, 816, 680, 833, 666, 786, 695, 762, 604, 796, 538, 807,
		460, 849, 414, 863, 338, 919, 306, 942, 279, 986, 252, 1005, 273, 902,
		291, 799, 307, 667, 278, 636, 310, 564);

	// pushes all of the constellation's values into the constellations array						
	constellations.push(
		{
			name: "Aries", img: AriesImg, size: 4, v1: Aries.v1, v2: Aries.v2, v3: Aries.v3, v4: Aries.v4,
			line: [0, 0, 0], completed: 0, glowArray: [],
			startStars: [Aries.v1[0], Aries.v1[1], Aries.v1[2]],
		},

		{
			name: "Taurus", img: TaurusImg, size: 12, v1: Taurus.v1, v2: Taurus.v2, v3: Taurus.v3, v4: Taurus.v4,
			v5: Taurus.v5, v6: Taurus.v6, v7: Taurus.v7, v8: Taurus.v8,
			v9: Taurus.v9, v10: Taurus.v10, v11: Taurus.v11, v12: Taurus.v12,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], completed: 0, glowArray: [],
			startStars: [Taurus.v1[0], Taurus.v1[1], Taurus.v1[2]]
		},

		{
			name: "Gemini", img: GeminiImg, size: 17,
			v1: Gemini.v1, v2: Gemini.v2, v3: Gemini.v3, v4: Gemini.v4,
			v5: Gemini.v5, v6: Gemini.v6, v7: Gemini.v7, v8: Gemini.v8,
			v9: Gemini.v9, v10: Gemini.v10, v11: Gemini.v11, v12: Gemini.v12,
			v13: Gemini.v13, v14: Gemini.v14, v15: Gemini.v15, v16: Gemini.v16,
			v17: Gemini.v17,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Gemini.v1[0], Gemini.v1[1], Gemini.v1[2]]
		},

		{
			name: "Cancer", img: CancerImg, size: 6,
			v1: Cancer.v1, v2: Cancer.v2, v3: Cancer.v3, v4: Cancer.v4,
			v5: Cancer.v5, v6: Cancer.v6,
			line: [0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Cancer.v1[0], Cancer.v1[1], Cancer.v1[2]]
		},

		{
			name: "Leo", img: LeoImg, size: 9,
			v1: Leo.v1, v2: Leo.v2, v3: Leo.v3, v4: Leo.v4,
			v5: Leo.v5, v6: Leo.v6, v7: Leo.v7, v8: Leo.v8, v9: Leo.v9,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Leo.v1[0], Leo.v1[1], Leo.v1[2]]
		},

		{
			name: "Virgo", img: VirgoImg, size: 12,
			v1: Virgo.v1, v2: Virgo.v2, v3: Virgo.v3, v4: Virgo.v4,
			v5: Virgo.v5, v6: Virgo.v6, v7: Virgo.v7, v8: Virgo.v8,
			v9: Virgo.v9, v10: Virgo.v10, v11: Virgo.v11, v12: Virgo.v12,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Virgo.v1[0], Virgo.v1[1], Virgo.v1[2]]
		},

		{
			name: "Libra", img: LibraImg, size: 5,
			v1: Libra.v1, v2: Libra.v2, v3: Libra.v3, v4: Libra.v4, v5: Libra.v5,
			line: [0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Libra.v1[0], Libra.v1[1], Libra.v1[2]]
		},

		{
			name: "Scorpius", img: ScorpiusImg, size: 13,
			v1: Scorpius.v1, v2: Scorpius.v2, v3: Scorpius.v3, v4: Scorpius.v4,
			v5: Scorpius.v5, v6: Scorpius.v6, v7: Scorpius.v7, v8: Scorpius.v8,
			v9: Scorpius.v9, v10: Scorpius.v10, v11: Scorpius.v11, v12: Scorpius.v12,
			v13: Scorpius.v13,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Scorpius.v1[0], Scorpius.v1[1], Scorpius.v1[2]]
		},

		{
			name: "Sagittarius", img: SagittariusImg, size: 21,
			v1: Sagittarius.v1, v2: Sagittarius.v2, v3: Sagittarius.v3, v4: Sagittarius.v4,
			v5: Sagittarius.v5, v6: Sagittarius.v6, v7: Sagittarius.v7, v8: Sagittarius.v8,
			v9: Sagittarius.v9, v10: Sagittarius.v10, v11: Sagittarius.v11, v12: Sagittarius.v12,
			v13: Sagittarius.v13, v14: Sagittarius.v14, v15: Sagittarius.v15, v16: Sagittarius.v16,
			v17: Sagittarius.v17, v18: Sagittarius.v18, v19: Sagittarius.v19, v20: Sagittarius.v20,
			v21: Sagittarius.v21,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Sagittarius.v1[0], Sagittarius.v1[1], Sagittarius.v1[2]]
		},

		{
			name: "Capricornus", img: CapricornusImg, size: 9,
			v1: Capricornus.v1, v2: Capricornus.v2, v3: Capricornus.v3, v4: Capricornus.v4,
			v5: Capricornus.v5, v6: Capricornus.v6, v7: Capricornus.v7, v8: Capricornus.v8,
			v9: Capricornus.v9,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			completed: 0, glowArray: [],
			startStars: [Capricornus.v1[0], Capricornus.v1[1], Capricornus.v1[2]]
		},

		{
			name: "Aquarius", img: AquariusImg, size: 16,
			v1: Aquarius.v1, v2: Aquarius.v2, v3: Aquarius.v3, v4: Aquarius.v4,
			v5: Aquarius.v5, v6: Aquarius.v6, v7: Aquarius.v7, v8: Aquarius.v8,
			v9: Aquarius.v9, v10: Aquarius.v10, v11: Aquarius.v11, v12: Aquarius.v12,
			v13: Aquarius.v13, v14: Aquarius.v14, v15: Aquarius.v15, v16: Aquarius.v16,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15 connections
			completed: 0, glowArray: [],
			startStars: [Aquarius.v1[0], Aquarius.v1[1], Aquarius.v1[2]]
		},

		{
			name: "Pisces", img: PiscesImg, size: 18,
			v1: Pisces.v1, v2: Pisces.v2, v3: Pisces.v3, v4: Pisces.v4,
			v5: Pisces.v5, v6: Pisces.v6, v7: Pisces.v7, v8: Pisces.v8,
			v9: Pisces.v9, v10: Pisces.v10, v11: Pisces.v11, v12: Pisces.v12,
			v13: Pisces.v13, v14: Pisces.v14, v15: Pisces.v15, v16: Pisces.v16,
			v17: Pisces.v17, v18: Pisces.v18,
			line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 19 connections
			completed: 0, glowArray: [],
			startStars: [Pisces.v1[0], Pisces.v1[1], Pisces.v1[2]]
		},

	);
}

//#endregion

let maxFrameRate = 0;

let leftBound, rightBound, topBound, bottomBound, constWindowWidth, constWindowHeight;
let currentMillis;

//#region Draw 
function draw() {
	currentMillis = millis();
	dilatingStroke = ((sin(millis() * 0.001) + 1) * 10) + 5;
	background("hsla(235, 70%, 20%, 1.00)");
	// Navigation
	cameraPanning();

	drawBackgroundStars();

	mouseDrawingLines();

	Aries.draw();
	Taurus.draw();
	Gemini.draw();
	Cancer.draw();
	Leo.draw();
	Virgo.draw();
	Libra.draw();
	Scorpius.draw();
	Sagittarius.draw();
	Capricornus.draw();
	Aquarius.draw();
	Pisces.draw();

	// if you are not drawing, check whether you're hovering a constellation's starting star
	// and set that constellation's value to currentConstellation
	if (!isDrawing) {
		stroke("e5e5ffff");
		strokeWeight(3);
		constellationCheck();
	}

	toggleCompletedWindow();

	// Ensures that the drawn lines pulse
	strokeWeight(dilatingStroke / 8 + 2)
	//strokeWeight(((sin(millis() * 0.02) + 3.5)));

	// Draws the lines of the constellations if they're visible
	stroke("#e5e5ffff");
	lines.forEach(drawLineIfVisible);

	print(hoveringMenus);
	// Notate stars
	/*for (let i = 1; i <= constellations[currentConstellation].size; i++) {
		let storv = 'v' + i
		strokeWeight(1)
		text(`${i}`, constellations[currentConstellation][storv][0] + 5, constellations[currentConstellation][storv][1])
	}*/

	// Display Framerate
	/*textSize(40);
	fill("#e5e5ffff");
	noStroke(); 
	if (frameCount % 5 == 0) {
		maxFrameRate = frameRate();
	}
	text(int(maxFrameRate), 1000 - translationX, 100 - translationY);
	maxFrameRate = min(frameRate(), maxFrameRate);*/

	// Lines to find center of screen
	/*line(0 - translationX, 0 - translationY, windowWidth - translationX, windowHeight - translationY)
	line(- translationX + windowWidth, 0 - translationY, 0 - translationX, windowHeight - translationY)*/
}
//#endregion

let xCircle = 2400, yCircle = 800;
function toggleCompletedWindow() {
	// Show completedWindow if it has been visible for less than 5s
	if (currentMillis - prevMillis < completedWindowInterval && oneConstDone == 1) {
		var constName = document.getElementById(latestConstellation);
		completedWindow.style.display = "block";

		for (let i = 1; i < 13; i++) {
			var constellation = document.getElementById(constellations[i].name);
			constellation.style.display = "none";
		}
		constName.style.display = "inline";
	}

	// Fade out completedWindow if it has been visible for more than 5s
	if (currentMillis - prevMillis > completedWindowInterval) {
		$("#completedWindow").fadeOut(500);
	}
}

function mouseDrawingLines() {
	if (isDrawing) {

		// Ensures starting stars stop glowing larger when you start drawing
		// by resetting the starting star scale value to 1;
		for (let i = 1; i < constellations.length; i++) {
			constellations[i].v1[4] = 1;
		}

		drawCurrentLines();

		checkNextStars(currentConstellation);
		neighbouringStarsGlow();
	}
}

function drawCurrentLines() {
	x2 = newMouseX;
	y2 = newMouseY;

	stroke('hsla(237, 70%, 31%, 1.00)');
	//stroke(200, 195, 255, 30)
	strokeWeight(dilatingStroke / 3 + 15);
	line(x1, y1, x2, y2);

	stroke('hsla(239, 57%, 46%, 1.00)');
	//stroke(200, 195, 255, 15);
	strokeWeight(dilatingStroke / 3 + 7);
	line(x1, y1, x2, y2);

	stroke('hsla(240, 100%, 91%, 1.00)');
	strokeWeight(dilatingStroke / 15 + 1);
	line(x1, y1, x2, y2);
}

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
let previousStar = 1;

const noLinesDrawn = (value) => value == 0;
let soundByte;
let soundEffectsOn = 0;

function drawLineIfVisible(l) {
	if (((leftBound < l.x1 && l.x1 < rightBound) || (topBound < l.y1 && l.y1 < bottomBound)) ||
		((leftBound < l.x2 && l.x2 < rightBound) || (topBound < l.y2 && l.y2 < bottomBound))) {
		line(l.x1, l.y1, l.x2, l.y2)
	}
}

function mousePressed() {
	//#region Start Playing Sound
	if (soundEffectsOn == 0) {
		soundByte = new p5.PolySynth();
		soundEffectsOn = 1;
	}
	//#endregion


	//#region Drawing Clicks
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

	else if (!isDrawing && mouseButton === LEFT && !keyIsDown(32) && hoveringMenus == 0) {
		soundEffects(0); // "cannot start drawing here" sound
	}
	//#endregion

	else if (mouseButton === LEFT && !keyIsDown(32)) {
		soundEffects(5);
	}

	//#region Right-Click Closing Menu
	if (mouseButton === RIGHT) {
		for (let i = 1; i < 13; i++) {
			constDetailedWindow = document.getElementById(constellations[i].name + "DetailedWindow")
			detailedWindow.style.display = "none";
			constDetailedWindow.style.display = "none";
			quiz.style.display = "none";
			about.style.display = "none";
		}
	}
	//#endregion

	for (let i = 0; i < constellations[currentConstellation].line.length; i++) {
		//--print(i, constellations[currentConstellation].line[i])
	}
}

const closeDetailedWindowButton = document.getElementById("closeDetailedWindow");

let startingStarScale = 1;
let hoveringMenus = 0;

function constellationCheck() {
	// for each constellation
	for (let i = 1; i < constellations.length; i++) {

		// check if hovering near any of the constellation's starting Stars
		for (let j = 0; j < constellations[i].startStars.length - 1; j = j + 3) {

			// if not drawing, mouse within 1000px, constellation is incomplete,
			// no lines have been drawn, then startingStar glows
			if (isDrawing != 1 && dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
				newMouseX, newMouseY) < 1000 && constellations[i].completed == 0 && constellations[i].line.every(noLinesDrawn)) {
				// the scale of the glowing is proportional to the mouse's distance to the star
				startingStarScale = map((abs(dist(newMouseX, newMouseY, constellations[i].startStars[j], constellations[i].startStars[j + 1]))), 0, 1000, 7, 5)
				constellations[i].v1[4] += (startingStarScale - constellations[i].v1[4]) * 0.2
			}

			else {
				constellations[i].v1[4] += (1 - constellations[i].v1[4]) * 0.01
			}

			// if yes, set that star's constellation value to currentConstellation
			if (dist(constellations[i].startStars[j], constellations[i].startStars[j + 1],
				newMouseX, newMouseY) < distance && hoveringMenus == 0) {

				currentConstellation = i;

				// this is the star value you are hovering over (integer)
				currentStar = (constellations[i].startStars[j + 2])

				// the nearestStar is the coordinates of the starting star
				// that is being hovered over
				nearestStar = [constellations[i].startStars[j],
				constellations[i].startStars[j + 1]];

				// Draws a star so I know I can start drawing
				textSize(((sin(millis() * 0.003) + 1) * 4) + 12);
				fill('white');
				textAlign(CENTER, CENTER);
				text("★", newMouseX, newMouseY - 8)

				// you can draw because you are hovering over a starting star
				canDraw = 1;

				//this line below ensures you can keep drawing from all the connected stars
				if (canDraw == 1) { break; }
			}

			else {
				canDraw = 0;
			}

		}
		if (canDraw == 1) { break; }
	}
}

const withinDrawingRange = (distance) => distance < dist(constellations[i].v1[0],
	constellations[i].v1[1], newMouseX, newMouseY);
//#endregion

let oneConstDone = 0;
let prevMillis = 0;
const completedWindowInterval = 5000;

function addConstellationToLibrary(c) {
	// Adds constellation to Library
	var currentConstItem = document.getElementById(constellations[c].name + "Item");
	$("#currentConstItem").fadeIn(500);
	currentConstItem.style.display = "block";

	latestConstellation = constellations[c].name

	// Finished const. popup appears
	completedWindow.style.display = "block";
	$("#completedWindow").fadeIn(500);
	//-- add toggle here
	// completedWindow timer
	prevMillis = millis();

	//--fix Later
	// Push constellation's image into imageAnswers array
	//imageAns.push(constellations[c].img)

	// Push name of constellation into nameAnswers array
	//nameAns.push(constellations[c].name)

	// Stops startingStar from glowing(?)
	constellations[c].v1[4] = 1;

	//--fix later
	if (nameAns.length > -1 && quizAccessible == 0) {
		quizAccessible = 1;
		quizButton.style.opacity = '1'
		quizButton.style.backgroundColor = rs.getPropertyValue('--button-colour');
		quizButton.style.color = rs.getPropertyValue('--text-colour');
		document.getElementById("quizMenuButton").style.cursor = "pointer"
	}
}

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
		if (panningCamera == false) {
			mouseStartX = mouseX;
			mouseStartY = mouseY;
		}

		cursor('grab');
		panningCamera = true;

		translationX = constrain((prevTranslationX - mouseStartX + mouseX),
			max(-width + windowWidth, -width), 750);
		translationY = constrain((prevTranslationY - mouseStartY + mouseY),
			max(-height + windowHeight, -height), 500);
	}

	else if (mouseDragging == false) {
		prevTranslationX = translationX;
		prevTranslationY = translationY;
		mouseStartX = mouseX;
		mouseStartY = mouseY;
		panningCamera = false;
	}

	// Canvas boundAries
	leftBound = -translationX;
	rightBound = -translationX + windowWidth;
	topBound = -translationY;
	bottomBound = windowHeight - translationY;

	translate(translationX, translationY);
	newMouseX = mouseX - translationX;
	newMouseY = mouseY - translationY;
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
const randomTAU = [0, 0.5, 1, 1.5, 2, 2.5, 3,
	3.5, 4, 4.5, 5, 5.5, 6];
const randomSize = [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5];

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(randomSize);
		this.t = random(randomTAU);
	}

	draw() {
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 2;
		let opacity = this.size * 5;
		noStroke();

		// Glow
		//fill(200, 195, 255, opacity);
		fill('#22267b');
		ellipse(this.x, this.y, scale * 3, scale * 3);

		// Star
		//fill(200, 195, 255, opacity * 10);
		fill('#a19ade');
		ellipse(this.x, this.y, scale);

		if ((leftBound < this.x + 20) == false) {
			this.x += constWindowWidth + 40;
		}

		else if ((this.x < rightBound + 20) == false) {
			this.x -= constWindowWidth + 40;
		}

		else if ((topBound < this.y + 20) == false) {
			this.y += constWindowHeight + 40;
		}

		else if ((this.y < bottomBound + 20) == false) {
			this.y -= constWindowHeight + 40;
		}
	}
}

function drawBackgroundStars() {
	// Stars (only drawn if visible within the window
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
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
	4. completedConstellation
	5. clickingButtons*/

	if (soundEffectsOn == 1) {
		const velocity = 0.1;
		const dur = 1 / 3;
		notesInt = (notesInt + round(random(1, 3))) % 4;

		if (constellations[currentConstellation].completed == 1 && n == 4) {
			// Would love it if the chord that plays corresponds to the next
			// note in the notesInt sequence. Not necessary though.
			notes4 = ['F4', 'A5', 'C5', 'F5'];
			soundByte.play(notes4[0], velocity, 0, dur);
			soundByte.play(notes4[1], velocity, 0.1, dur);
			soundByte.play(notes4[2], velocity, 0.2, dur);
			soundByte.play(notes4[3], velocity, 0.2, dur);
		}

		else {
			switch (n) {
				case 0:
					//cannotStartHere
					soundByte.play('F5', velocity / 10, 0, 0.3);
					soundByte.play('F4', velocity, 0, 0.3);
					soundByte.play('F3', velocity / 2, 0, 0.3);

					soundByte.play('F5', velocity / 10, 0.2, 0.15);
					soundByte.play('F4', velocity, 0.2, 0.15);
					soundByte.play('F3', velocity / 2, 0.2, 0.15);
					break;
				case 1:
					//startDrawing
					soundByte.play('F4', velocity, 0, dur);
					soundByte.play('C5', velocity, 0.1, dur);

					soundByte.play('F3', velocity / 5, 0, dur);
					soundByte.play('C4', velocity / 5, 0.1, dur);
					break;
				case 2:
					//continuedToNextStar
					const notes2 = ['C4', 'E4', 'F4', 'A5', 'C5', 'E5', 'F5'];
					soundByte.play(notes2[notesInt], velocity, 0, dur);
					break;
				case 3:
					//stoppedDrawing
					soundByte.play('F5', velocity / 10, 0, 0.3);
					soundByte.play('F4', velocity, 0, 0.3);
					soundByte.play('F3', velocity / 2, 0, 0.3);
					break;

				case 5:
					//clickingButtons
					soundByte.play('F3', velocity, 0, dur * 1.1);
					soundByte.play('C4', velocity, 0, dur * 1.1);

					break;
			}
		}
	}
}
//#endregion

//#region Button Functions



//#endregion