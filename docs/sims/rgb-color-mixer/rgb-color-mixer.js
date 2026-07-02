// RGB Color Mixer MicroSim
// CANVAS_HEIGHT: 480
// Students mix red, green, and blue with sliders, read the live hex
// code (with the digits of the last-moved channel highlighted), and
// beat match-the-color challenges with a proximity meter.
// Bloom level: Apply (use, demonstrate, solve) - parameter sliders
// with immediate feedback and practice challenges.
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 330;
let controlHeight = 150; // three slider rows + one button row
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

let rSlider, gSlider, bSlider, challengeButton;
let lastChanged = null; // 'r' | 'g' | 'b' - which hex pair to highlight

// challenge state
let target = null; // {r, g, b, name}
let targetBank = [
  { r: 255, g: 107, b: 53, name: 'sunset orange' },
  { r: 63, g: 167, b: 214, name: 'sky blue' },
  { r: 46, g: 139, b: 87, name: 'sea green' },
  { r: 255, g: 215, b: 0, name: 'gold' },
  { r: 186, g: 85, b: 211, name: 'orchid purple' },
  { r: 220, g: 20, b: 60, name: 'crimson' },
  { r: 244, g: 164, b: 96, name: 'sandy brown' },
  { r: 32, g: 178, b: 170, name: 'light sea green' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  rSlider = createSlider(0, 255, 255, 1);
  rSlider.parent(mainElement);
  rSlider.position(sliderLeftMargin, drawHeight + 10);
  rSlider.size(canvasWidth - sliderLeftMargin - margin);
  rSlider.input(() => { lastChanged = 'r'; });

  gSlider = createSlider(0, 255, 107, 1);
  gSlider.parent(mainElement);
  gSlider.position(sliderLeftMargin, drawHeight + 45);
  gSlider.size(canvasWidth - sliderLeftMargin - margin);
  gSlider.input(() => { lastChanged = 'g'; });

  bSlider = createSlider(0, 255, 53, 1);
  bSlider.parent(mainElement);
  bSlider.position(sliderLeftMargin, drawHeight + 80);
  bSlider.size(canvasWidth - sliderLeftMargin - margin);
  bSlider.input(() => { lastChanged = 'b'; });

  challengeButton = createButton('New Challenge');
  challengeButton.parent(mainElement);
  challengeButton.position(10, drawHeight + 113);
  challengeButton.mousePressed(() => {
    target = targetBank[Math.floor(random(targetBank.length))];
  });

  describe('Mix red, green, and blue with sliders to create a color. The hex code updates live with the last-changed channel highlighted. Challenge mode shows a target color to match, with a closeness meter.', LABEL);
}

function hexPair(v) {
  let h = v.toString(16).toUpperCase();
  return h.length < 2 ? '0' + h : h;
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('RGB Color Mixer', canvasWidth / 2, 8);

  drawSwatches(r, g, b);
  drawReadouts(r, g, b);

  // slider labels and values, tinted to match their channel
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  fill(180, 30, 30);
  text('Red: ' + r, 15, drawHeight + 20);
  fill(20, 130, 40);
  text('Green: ' + g, 15, drawHeight + 55);
  fill(30, 60, 200);
  text('Blue: ' + b, 15, drawHeight + 90);
}

// the mixed swatch (and target swatch + meter when a challenge is active)
function drawSwatches(r, g, b) {
  let y = 52;
  let swatchH = 170;

  if (!target) {
    // one big swatch
    let w = Math.min(canvasWidth * 0.42, 320);
    let x = 30;
    stroke(150);
    strokeWeight(1);
    fill(r, g, b);
    rect(x, y, w, swatchH, 12);
    noStroke();
    fill(100);
    textSize(14);
    textAlign(CENTER, TOP);
    text('your color', x + w / 2, y + swatchH + 6);
  } else {
    // side-by-side: your mix vs the target
    let w = Math.min(canvasWidth * 0.21, 170);
    let x1 = 30;
    let x2 = x1 + w + 18;
    stroke(150);
    strokeWeight(1);
    fill(r, g, b);
    rect(x1, y, w, swatchH, 12);
    fill(target.r, target.g, target.b);
    rect(x2, y, w, swatchH, 12);
    noStroke();
    fill(100);
    textSize(14);
    textAlign(CENTER, TOP);
    text('your color', x1 + w / 2, y + swatchH + 6);
    text('target: ' + target.name, x2 + w / 2, y + swatchH + 6);

    // closeness meter under the swatches
    let dist = Math.sqrt(
      Math.pow(r - target.r, 2) + Math.pow(g - target.g, 2) + Math.pow(b - target.b, 2)
    );
    let closeness = Math.max(0, 1 - dist / 442); // 442 = max RGB distance
    let meterX = x1;
    let meterW = x2 + w - x1;
    let meterY = y + swatchH + 30;
    stroke(180);
    strokeWeight(1);
    fill(245);
    rect(meterX, meterY, meterW, 18, 5);
    noStroke();
    fill(dist < 30 ? 'seagreen' : 'steelblue');
    rect(meterX, meterY, meterW * closeness, 18, 5);
    fill('black');
    textSize(14);
    textAlign(LEFT, TOP);
    if (dist < 30) {
      fill('seagreen');
      text('Matched! You mixed ' + target.name + '. Click New Challenge for another.', meterX, meterY + 26);
    } else {
      fill(90);
      text('closeness: ' + Math.round(closeness * 100) + '% — keep adjusting!', meterX, meterY + 26);
    }
  }
}

// decimal, hex, and copy-ready readouts on the right side
function drawReadouts(r, g, b) {
  let x = canvasWidth * 0.52;
  let w = canvasWidth - x - 20;
  let y = 60;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(x, y, w, 210, 10);

  noStroke();
  textAlign(LEFT, TOP);

  // decimal readout
  fill(100);
  textSize(14);
  text('as three numbers (0–255):', x + 14, y + 12);
  fill('midnightblue');
  textSize(19);
  text('(' + r + ', ' + g + ', ' + b + ')', x + 14, y + 32);

  // hex readout with per-channel coloring and last-changed highlight
  fill(100);
  textSize(14);
  text('as a hex code:', x + 14, y + 68);
  textSize(26);
  let hx = x + 14;
  let hy = y + 88;
  let pairs = [
    { txt: hexPair(r), ch: 'r', col: color(180, 30, 30) },
    { txt: hexPair(g), ch: 'g', col: color(20, 130, 40) },
    { txt: hexPair(b), ch: 'b', col: color(30, 60, 200) }
  ];
  fill(60);
  text('"#', hx, hy);
  hx += textWidth('"#');
  for (let p of pairs) {
    if (lastChanged === p.ch) {
      noStroke();
      fill(255, 236, 179);
      rect(hx - 2, hy - 3, textWidth(p.txt) + 4, 32, 4);
    }
    fill(p.col);
    text(p.txt, hx, hy);
    hx += textWidth(p.txt);
  }
  fill(60);
  text('"', hx, hy);

  // hex explainer line
  fill(120);
  textSize(13);
  text('two hex digits per channel: red, green, blue', x + 14, y + 122);

  // copy-ready turtle line
  fill(100);
  textSize(14);
  text('use it with the turtle:', x + 14, y + 150);
  fill('darkgreen');
  textSize(16);
  text('t.pencolor("#' + hexPair(r) + hexPair(g) + hexPair(b) + '")', x + 14, y + 170);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  rSlider.size(canvasWidth - sliderLeftMargin - margin);
  gSlider.size(canvasWidth - sliderLeftMargin - margin);
  bSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
