// Star twinkle by wvnl on p5js.org; https://editor.p5js.org/wvnl/sketches
//#region Initialising Variables
let stars = [];
let bigStars = [];
let canvasArea;
let button, libButton, quizButton, helpButton
let testStars = [];

//#region Setup
function setup() {
	//#region Canvas/Background
	createCanvas(windowWidth, windowHeight);
    canvasArea = windowWidth + windowHeight;

	//starImg = loadImage('/assets/star.png');
	for (var i = 0; i < canvasArea; i++) {
		stars[i] = new Star();
	}

	for (var i = 0; i < canvasArea / 4; i++) {
		bigStars[i] = new bigStar();
	}
	//#endregion
	
	//#region Sidebar Buttons
	libButton = createButton ('🕮')

	quizButton = createButton ('Q')

	helpButton = createButton ('⚙')
	
	//#endregion
}
//#endregion

let isDragging = false;
let x1, y1, x2, y2;

//#region Draw
function draw() {
	if (windowWidth > 700){
		libButton.position(0, 0);
		quizButton.position(0, windowHeight / 8 * 1);
		helpButton.position(0, windowHeight / 8 * 2);
	}

	else{
		libButton.position(windowWidth / 2.15 + 125, windowHeight * 0.89);
		quizButton.position(windowWidth / 2.15, windowHeight * 0.89);
		helpButton.position(windowWidth / 2.15 - 125, windowHeight * 0.89);
	}	

	resizeCanvas(windowWidth, windowHeight);
	background('#090920');
	cursor('/assets/star.png');
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}

	for (var i = 0; i < bigStars.length; i++) {
		bigStars[i].draw();
	}
	fill('white')

	testStars = [
			{x: 300, y: 500},
			{x: 700, y: 200}
		]

	drawingConstellations()
	checkDraw()
	if (isDragging) {
    line(x1, y1, x2, y2);
  }
}
//#endregion

function drawingConstellations(){
		fill('red')

		testStars[0] = circle(testStars[0].x, testStars[0].y, 10);
		testStars[1] = circle(testStars[1].x, testStars[1].y, 10);

		testStars = [
			{x: 300, y: 500},
			{x: 700, y: 200}
		]
}

function mouseDragged() {
  if (!isDragging) {
    x1 = pmouseX;
    y1 = pmouseY;
    isDragging = true;
  }
  x2 = mouseX;
  y2 = mouseY;
}

function mouseReleased() {
  isDragging = false;
}

/*	Am trying to think of how I can program in the constellation function
	Smt like "if mouse is within 50px of circle and mouseClicked, then
	start a line from the origin of the circle to the mouse."

	Will probably have to do smt like "if you're not already drawing
	and you click near a star, then draw a line connecting the mouse
	to the original star until you click on a new star OR click off
	if you click on a new star, the line attaches onto the new star
	If you click off, then the line disappears i guess. so that
	players aren't locked into having to complete a star if
	they don't wanna"
*/

function checkDraw(){
	for (let i = 0; i < testStars.length; i++){
		if (dist(mouseX, mouseY, testStars[i].x, testStars[i].y) < 100){
			print(`mouse is near star ${i}`);
			circle(mouseX, mouseY, 15);
			print(i);
			print(testStars[1].x)
			print(testStars[1].y)
			print(testStars[0].x)
			print(testStars[0].y)
			fill('red');
			stroke('red')
			strokeWeight(3);
			line(testStars[i].x, testStars[i].y, mouseX, mouseY)
			
	}
		else {
			print('far star');
			print(i);
			print(testStars[1].x)
			print(testStars[1].y)
			print(testStars[0].x)
			print(testStars[0].y)
		}
	}
}

function drawLine(x, y){
	line(x, y, mouseX, mouseY)
}
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
