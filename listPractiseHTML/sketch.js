let q = { true: 0 }
let w = { true: 0 }
let e = { true: 0 }
let r = { true: 0 }
let t = { true: 0 }


function setup() {
  createCanvas(1920, 1080);
  libButton = createButton('🕮')
	quizButton = createButton('Q')
	helpButton = createButton('⚙')
  libButton.mouseReleased(libButtonPress)
  quizButton.mouseReleased(quizButtonPress)
  helpButton.mouseReleased(helpButtonPress)
}

function draw() {
  background("#0E1346");
  buttonPlacement();
}

function buttonPlacement() {
	if (windowWidth > 700) {
		libButton.position(0, 0);
		quizButton.position(0, 122);
		helpButton.position(0, 244);
	}

	else {
		libButton.position(windowWidth / 2.15 - 125, windowHeight * 0.89);
		quizButton.position(windowWidth / 2.15, windowHeight * 0.89);
		helpButton.position(windowWidth / 2.15 + 125, windowHeight * 0.89);
	}
}

function libButtonPress(){
  print("lib button press")
  var lib = document.getElementById("library");
  if (lib.style.display === "none") {
    lib.style.display = "block";
  } else {
    lib.style.display = "none";
  }
}

function quizButtonPress(){
  print("quiz button press")
}

function helpButtonPress(){
  print("help button press")
}

function keyPressed() {
  switch (key) {
    case 'q':
      q.true = 1;
      background("pink")
      break;

    case 'w':
      w.true = 1;
      background("coral")
      break;

    case 'e':
      e.true = 1;
      background("yellow")
      break;

    case 'r':
      r.true = 1;
      background("lime")
      break;

    case 't':
      t.true = 1;
      background("cyan")
      break;
  }
}