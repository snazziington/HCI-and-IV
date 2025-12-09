// Confetti Party!!!
// The Coding Train / Daniel Shiffman
// Processing Intro Series

// this is part 1 of 3
// part 2 : https://editor.p5js.org/codingtrain/sketches/oSonGreKO
// part 3 : https://editor.p5js.org/codingtrain/sketches/mJvDgc9Yj

let confetti = [];
let partyTime = false;

function setup() {
  createCanvas(640, 360);

  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti();
  }
}

function mousePressed() {
  partyTime = true; 
  for (let c of confetti) {
    c.burst(mouseX, mouseY);
  }
}

function draw() {
  background(255);
  if (partyTime) {
    for (let c of confetti) {
      c.show();
      c.update();
    }
  }
}

class Confetti {
  constructor() {
    this.x = -1000;
    this.y = -1000;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  burst(mx, my) {
    this.x = mx;
    this.y = my;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
  }

  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    this.yspeed = this.yspeed + 0.1;
  }

  show() {
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, 10, 10);
  }

}
