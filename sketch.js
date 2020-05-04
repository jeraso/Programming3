let dim;

function setup() {
  createCanvas(500, 500);
  dim = width / 480;
  colorMode(HSB, 1200, 40, 50);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(10);
}

function draw() {
background(10)
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / .2;
  let h = random(0, 180);
  for (let r = radius; r > 0; --r) {
    fill(h, 150, 90);
    ellipse(y, x, y, y);
    h = (h + 1) % 720;
  }
}
