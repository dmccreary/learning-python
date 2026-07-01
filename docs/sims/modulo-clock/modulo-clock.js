// Modulo Clock MicroSim
// CANVAS_HEIGHT: 500
// Students adjust dividend and divisor sliders and instantly see the
// remainder two ways: as wrap-around counting on a circular dial, and
// as dots grouped into equal rows with leftovers highlighted.
// Bloom level: Apply (use, demonstrate, solve) - parameter sliders
// with immediate visual feedback.
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 80; // two slider rows
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

let dividend = 17;
let divisor = 5;

let dividendSlider, divisorSlider;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  dividendSlider = createSlider(0, 60, dividend, 1);
  dividendSlider.parent(mainElement);
  dividendSlider.position(sliderLeftMargin, drawHeight + 10);
  dividendSlider.size(canvasWidth - sliderLeftMargin - margin);

  divisorSlider = createSlider(2, 12, divisor, 1);
  divisorSlider.parent(mainElement);
  divisorSlider.position(sliderLeftMargin, drawHeight + 45);
  divisorSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('Adjust dividend and divisor sliders to see the remainder of division two ways: as wrap-around counting on a circular dial and as dots grouped into equal rows with leftovers highlighted.', LABEL);
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  dividend = dividendSlider.value();
  divisor = divisorSlider.value();
  let remainder = dividend % divisor;
  let laps = Math.floor(dividend / divisor);

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Modulo Clock', canvasWidth / 2, 8);

  drawReadout(remainder, laps);
  drawDial(remainder, laps);
  drawGrouping(remainder, laps);

  // slider labels and values
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Dividend: ' + dividend, 15, drawHeight + 20);
  text('Divisor: ' + divisor, 15, drawHeight + 55);
}

// big result readout across the top
function drawReadout(remainder, laps) {
  let y = 44;
  noStroke();
  textAlign(CENTER, TOP);
  textSize(26);
  fill('midnightblue');
  text(dividend + ' % ' + divisor + '  =  ' + remainder, canvasWidth / 2, y);
  textSize(15);
  fill(90);
  text(dividend + ' = ' + laps + ' × ' + divisor + '  +  ' + remainder,
    canvasWidth / 2, y + 34);
  // even/odd insight appears when the divisor is 2
  if (divisor === 2) {
    fill('darkgreen');
    text(dividend + ' is ' + (remainder === 0 ? 'EVEN (remainder 0)' : 'ODD (remainder 1)'),
      canvasWidth / 2, y + 56);
  }
  textSize(defaultTextSize);
}

// left: the wrap-around dial with `divisor` slots
function drawDial(remainder, laps) {
  let cx = canvasWidth * 0.27;
  let cy = 260;
  let r = 105;

  noStroke();
  fill(100);
  textAlign(CENTER, TOP);
  textSize(14);
  text('count around the clock, wrap at ' + divisor, cx, 132);

  // dial face
  fill('white');
  stroke(180);
  strokeWeight(1);
  circle(cx, cy, r * 2);

  // slots 0..divisor-1 clockwise from the top
  for (let i = 0; i < divisor; i++) {
    let a = -HALF_PI + TWO_PI * i / divisor;
    let sx = cx + cos(a) * (r - 22);
    let sy = cy + sin(a) * (r - 22);
    if (i === remainder) {
      fill('darkorange');
      stroke('darkorange');
      strokeWeight(2);
      circle(sx, sy, 34);
      noStroke();
      fill('white');
    } else {
      noStroke();
      fill(235);
      circle(sx, sy, 30);
      fill(80);
    }
    textAlign(CENTER, CENTER);
    textSize(16);
    text(i, sx, sy);
  }

  // laps summary in the middle of the dial
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(15);
  text(laps + (laps === 1 ? ' full lap' : ' full laps'), cx, cy - 10);
  fill('darkorange');
  text('land on ' + remainder, cx, cy + 14);
}

// right: dividend dots grouped into rows of `divisor`
function drawGrouping(remainder, laps) {
  let areaX = canvasWidth * 0.52;
  let areaY = 150;
  let areaW = canvasWidth - areaX - 20;
  let areaH = 250;

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('make rows of ' + divisor + ' — the leftover is the remainder', areaX, 132);

  if (dividend === 0) {
    fill(120);
    textSize(defaultTextSize);
    text('0 dots — nothing to group, remainder 0.', areaX, areaY + 20);
    return;
  }

  let rows = laps + (remainder > 0 ? 1 : 0);
  // fit dot size to the available space
  let cell = Math.min(26, areaW / divisor, areaH / rows);
  let d = cell * 0.72;

  for (let i = 0; i < dividend; i++) {
    let row = Math.floor(i / divisor);
    let col = i % divisor;
    let x = areaX + col * cell + cell / 2;
    let y = areaY + row * cell + cell / 2;
    let isLeftover = i >= laps * divisor;
    noStroke();
    fill(isLeftover ? 'darkorange' : 'steelblue');
    circle(x, y, d);
  }

  // bracket label for the leftover row
  if (remainder > 0) {
    let ly = areaY + laps * cell + cell / 2;
    noStroke();
    fill('darkorange');
    textAlign(LEFT, CENTER);
    textSize(14);
    text('← ' + remainder + ' left over', areaX + divisor * cell + 8, ly);
  } else {
    noStroke();
    fill('darkgreen');
    textAlign(LEFT, TOP);
    textSize(14);
    text('No leftovers — ' + divisor + ' divides ' + dividend + ' evenly!', areaX, areaY + rows * cell + 10);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  dividendSlider.size(canvasWidth - sliderLeftMargin - margin);
  divisorSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
