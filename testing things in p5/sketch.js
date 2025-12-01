function setup() {
  createCanvas(400, 400);

}

let t = 2
function draw() {
  background(220);
  fill("red")
  stroke("red")
  // These values do NOT change
  // x
  // y
  let i = 4
  let j = 6
  size = (i + j) % 3 * 10;
  tArray = [0, 1, 2, 3, 4, 5, 6]
  //t = tArray[i % 8];	// could make more "random"
  // These values SHOULD change
  t += 0.05;
  letScale = size + sin(t) * 4;
  print(t)

  /*---
  //--- need to fix this so it actually oscillates
  this.size = (i + j) % 3;
  //let tArray = [0, 1, 2, 3, 4, 5, 6]
  this.t = tArray[i % 8];
  this.t += 0.05;
  var scale = this.size + sin(this.t) * 16;

  //this.x = random(width);
  //this.y = random(height);
  //this.size = random(1, 2.49);
  //this.t = random(TAU);
  //this.t += 0.03;
  var scale = this.size + sin(this.t) * 45;
  let opacity = this.size * 12;

  print(this.t)
  // Highlight
  //fill(200, 195, 255, opacity);
  ellipse(this.x, this.y, scale * 3, scale * 3);*/

  circle(200, 200, letScale);
}
