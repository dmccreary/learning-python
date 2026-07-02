// Set Operations Venn MicroSim
// CANVAS_HEIGHT: 540
// Students type two sets, watch member chips land in the correct Venn
// regions (duplicates collapse automatically), and click operation
// buttons to shade union, intersection, difference, and symmetric
// difference - with the Python expression and result set printed live.
// Bloom level: Understand/Analyze (classify, compare, organize).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 80; // row 1: two set inputs, row 2: four op buttons
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

let inputA, inputB;
let currentOp = '|'; // '|', '&', '-', '^'
let setA = [];
let setB = [];
let hadDuplicates = false;

// circle geometry, recomputed each frame
let cy, r, ax, bx;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  inputA = createInput('dog, cat, fish, bird');
  inputA.parent(mainElement);
  inputA.position(70, drawHeight + 8);
  inputA.size(200);
  inputA.input(parseSets);

  inputB = createInput('cat, bird, snake, hamster');
  inputB.parent(mainElement);
  inputB.position(360, drawHeight + 8);
  inputB.size(200);
  inputB.input(parseSets);

  // operation buttons
  let ops = [
    { code: '|', label: 'A | B  union' },
    { code: '&', label: 'A & B  intersection' },
    { code: '-', label: 'A - B  difference' },
    { code: '^', label: 'A ^ B  symmetric' }
  ];
  let x = 10;
  for (let op of ops) {
    let b = createButton(op.label);
    b.parent(mainElement);
    b.position(x, drawHeight + 44);
    b.mousePressed(() => { currentOp = op.code; });
    x += 165;
  }

  parseSets();

  describe('Type two sets and watch member chips land in the correct Venn diagram regions. Operation buttons shade union, intersection, difference, and symmetric difference, printing the Python expression and result set.', LABEL);
}

// parse the two inputs into deduplicated sets (that IS the set behavior)
function parseSets() {
  hadDuplicates = false;
  setA = parseOne(inputA.value());
  setB = parseOne(inputB.value());
}

function parseOne(raw) {
  let items = raw.split(',')
    .map(s => s.trim().toLowerCase().slice(0, 10))
    .filter(s => s.length > 0)
    .slice(0, 8);
  let seen = [];
  for (let it of items) {
    if (seen.includes(it)) {
      hadDuplicates = true;
    } else {
      seen.push(it);
    }
  }
  return seen.slice(0, 6);
}

// region membership
function regions() {
  let aOnly = setA.filter(x => !setB.includes(x));
  let both = setA.filter(x => setB.includes(x));
  let bOnly = setB.filter(x => !setA.includes(x));
  return { aOnly, both, bOnly };
}

// the result of the current operation, in a stable order
function opResult() {
  let { aOnly, both, bOnly } = regions();
  if (currentOp === '|') return aOnly.concat(both, bOnly);
  if (currentOp === '&') return both;
  if (currentOp === '-') return aOnly;
  return aOnly.concat(bOnly); // '^'
}

function pyRepr(items) {
  if (items.length === 0) return 'set()';
  return '{' + items.map(s => "'" + s + "'").join(', ') + '}';
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Set Operations', canvasWidth / 2, 8);

  // circle geometry
  cy = 216;
  r = Math.min(132, canvasWidth * 0.19);
  ax = canvasWidth / 2 - r * 0.62;
  bx = canvasWidth / 2 + r * 0.62;

  drawVenn();
  drawChips();
  drawResult();

  // control labels
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Set A:', 15, drawHeight + 20);
  text('Set B:', 305, drawHeight + 20);
}

// circles with the current operation's region shaded amber
function drawVenn() {
  let dc = drawingContext;
  let amber = color(255, 224, 130);

  noStroke();
  // white circle interiors first
  fill('white');
  circle(ax, cy, r * 2);
  circle(bx, cy, r * 2);

  // shade the selected region(s)
  fill(amber);
  if (currentOp === '|') {
    circle(ax, cy, r * 2);
    circle(bx, cy, r * 2);
  } else if (currentOp === '&') {
    fillLens(amber);
  } else if (currentOp === '-') {
    circle(ax, cy, r * 2);
    fillLens(color(255)); // un-shade the overlap
  } else { // '^'
    circle(ax, cy, r * 2);
    circle(bx, cy, r * 2);
    fillLens(color(255));
  }

  // circle outlines on top
  noFill();
  stroke('steelblue');
  strokeWeight(3);
  circle(ax, cy, r * 2);
  stroke('darkorange');
  circle(bx, cy, r * 2);

  // set labels
  noStroke();
  textSize(20);
  fill('steelblue');
  textAlign(CENTER, BOTTOM);
  text('A', ax - r * 0.6, cy - r - 8);
  fill('darkorange');
  text('B', bx + r * 0.6, cy - r - 8);
}

// fill the lens (A ∩ B region) with a color, using canvas clipping
function fillLens(col) {
  let dc = drawingContext;
  dc.save();
  dc.beginPath();
  dc.arc(ax, cy, r, 0, TWO_PI);
  dc.clip();
  noStroke();
  fill(col);
  circle(bx, cy, r * 2);
  dc.restore();
}

// member chips placed in their regions
function drawChips() {
  let { aOnly, both, bOnly } = regions();
  drawChipColumn(aOnly, ax - r * 0.42, cy);
  drawChipColumn(both, (ax + bx) / 2, cy);
  drawChipColumn(bOnly, bx + r * 0.42, cy);
}

function drawChipColumn(items, x, centerY) {
  let chipH = 26;
  let gap = 6;
  let totalH = items.length * chipH + (items.length - 1) * gap;
  let y0 = centerY - totalH / 2;
  textSize(14);
  for (let i = 0; i < items.length; i++) {
    let y = y0 + i * (chipH + gap);
    let w = textWidth(items[i]) + 18;
    stroke(150);
    strokeWeight(1);
    fill('white');
    rect(x - w / 2, y, w, chipH, 13);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    text(items[i], x, y + chipH / 2);
  }
}

// the Python expression and result set, plus notes
function drawResult() {
  let opNames = { '|': 'union — in A or B (or both)', '&': 'intersection — in BOTH',
    '-': 'difference — in A but not B', '^': 'symmetric difference — in exactly one' };

  noStroke();
  textAlign(CENTER, TOP);
  textSize(20);
  fill('midnightblue');
  text('A ' + currentOp + ' B   →   ' + pyRepr(opResult()), canvasWidth / 2, 366);
  textSize(15);
  fill(90);
  text(opNames[currentOp], canvasWidth / 2, 396);

  // duplicate-collapse teaching moment
  textSize(14);
  if (hadDuplicates) {
    fill('darkorange');
    text('You typed a duplicate — the set kept only ONE copy. Sets never hold repeats!', canvasWidth / 2, 424);
  } else {
    fill(140);
    text('Try typing the same animal twice in one set and watch what happens.', canvasWidth / 2, 424);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
