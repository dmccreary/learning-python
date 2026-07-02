// List Index Explorer MicroSim
// CANVAS_HEIGHT: 480
// Students click append, insert, and pop buttons and watch a list of
// colored boxes reshape in place - indices renumber after every change,
// and each operation shows the exact Python line it ran. A String Test
// contrast panel shows that strings refuse the same in-place change
// with a real TypeError.
// Bloom level: Apply/Analyze (use, demonstrate, differentiate).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// the list: color names with matching swatch colors
let bank = [
  { name: 'red', col: 'indianred' },
  { name: 'gold', col: 'gold' },
  { name: 'teal', col: 'teal' },
  { name: 'plum', col: 'plum' },
  { name: 'coral', col: 'coral' },
  { name: 'skyblue', col: 'skyblue' },
  { name: 'lime', col: 'limegreen' },
  { name: 'pink', col: 'lightpink' }
];
let items = [];
let bankPos = 3;         // next bank item to hand out
let lastOp = null;       // the Python line just executed
let lastNote = '';       // plain-language explanation
let changedIdx = -1;     // which box to highlight (-1 = none)
let showStringTest = false;

let appendButton, insertButton, popButton, stringButton, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);
  resetList();

  appendButton = createButton('append()');
  appendButton.parent(mainElement);
  appendButton.position(10, drawHeight + 10);
  appendButton.mousePressed(doAppend);

  insertButton = createButton('insert(1, ...)');
  insertButton.parent(mainElement);
  insertButton.position(100, drawHeight + 10);
  insertButton.mousePressed(doInsert);

  popButton = createButton('pop()');
  popButton.parent(mainElement);
  popButton.position(210, drawHeight + 10);
  popButton.mousePressed(doPop);

  stringButton = createButton('String Test');
  stringButton.parent(mainElement);
  stringButton.position(280, drawHeight + 10);
  stringButton.mousePressed(() => {
    showStringTest = !showStringTest;
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(380, drawHeight + 10);
  resetButton.mousePressed(resetList);

  describe('Click append, insert, and pop buttons and watch a list of colored boxes reshape in place. Indices renumber after every change and each operation shows the Python line it ran. A String Test panel shows that strings refuse the same change with a TypeError.', LABEL);
}

function resetList() {
  items = [bank[0], bank[1], bank[2]];
  bankPos = 3;
  lastOp = null;
  lastNote = '';
  changedIdx = -1;
  showStringTest = false;
}

function doAppend() {
  if (items.length >= 8) {
    lastNote = 'The shelf is full — pop something first!';
    return;
  }
  let item = bank[bankPos % bank.length];
  bankPos += 1;
  items.push(item);
  lastOp = 'colors.append("' + item.name + '")';
  lastNote = 'append() adds to the END. No other index changed.';
  changedIdx = items.length - 1;
}

function doInsert() {
  if (items.length >= 8) {
    lastNote = 'The shelf is full — pop something first!';
    return;
  }
  let item = bank[bankPos % bank.length];
  bankPos += 1;
  items.splice(1, 0, item);
  lastOp = 'colors.insert(1, "' + item.name + '")';
  lastNote = 'insert(1, ...) squeezes in at index 1 — every item after it slides right and gets a NEW index.';
  changedIdx = 1;
}

function doPop() {
  if (items.length === 0) {
    lastNote = 'The list is empty — nothing to pop. (Real Python raises IndexError here!)';
    lastOp = 'colors.pop()';
    changedIdx = -1;
    return;
  }
  let item = items.pop();
  lastOp = 'colors.pop()';
  lastNote = 'pop() removes and returns the LAST item ("' + item.name + '"). The list shrank in place.';
  changedIdx = -1;
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
  text('List Index Explorer', canvasWidth / 2, 8);

  // the executed code line
  noStroke();
  textAlign(CENTER, TOP);
  textSize(19);
  if (lastOp) {
    fill('darkgreen');
    text(lastOp, canvasWidth / 2, 44);
  } else {
    fill(120);
    text('colors = ["red", "gold", "teal"]', canvasWidth / 2, 44);
  }

  drawBoxes();
  drawRepr();
  drawNotePanel();
  if (showStringTest) {
    drawStringTest();
  }
}

function drawBoxes() {
  let n = items.length;
  let boxW = Math.min(86, (canvasWidth - 60) / Math.max(n, 1));
  let x0 = (canvasWidth - boxW * n) / 2;
  let y = 112;
  let boxH = 58;

  for (let i = 0; i < n; i++) {
    let x = x0 + i * boxW;
    let isNew = i === changedIdx;
    stroke(isNew ? 'darkorange' : 120);
    strokeWeight(isNew ? 3 : 1);
    fill(items[i].col);
    rect(x + 3, y, boxW - 6, boxH, 8);
    // item label on the swatch
    noStroke();
    fill(0, 0, 0, 160);
    rect(x + 3, y + boxH - 22, boxW - 6, 22, 0, 0, 8, 8);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('"' + items[i].name + '"', x + boxW / 2, y + boxH - 11);
    // positive index above
    fill(60);
    textSize(14);
    textAlign(CENTER, BOTTOM);
    text(i, x + boxW / 2, y - 4);
    // negative index below
    fill(150);
    textAlign(CENTER, TOP);
    text(i - n, x + boxW / 2, y + boxH + 4);
  }

  if (n === 0) {
    noStroke();
    fill(150);
    textAlign(CENTER, CENTER);
    textSize(defaultTextSize);
    text('(empty list)', canvasWidth / 2, y + boxH / 2);
  }

  // axis captions
  noStroke();
  fill(100);
  textSize(13);
  textAlign(LEFT, BOTTOM);
  text('index', 20, 108);
  fill(150);
  textAlign(LEFT, TOP);
  text('negative index', 20, 174);
}

function drawRepr() {
  noStroke();
  fill('midnightblue');
  textAlign(CENTER, TOP);
  textSize(16);
  let repr = '[' + items.map(it => '"' + it.name + '"').join(', ') + ']';
  text('colors is now:  ' + repr, canvasWidth / 2, 208);
  fill(100);
  textSize(14);
  text('len(colors) = ' + items.length, canvasWidth / 2, 232);
}

function drawNotePanel() {
  let panelX = 15;
  let panelY = 262;
  let panelW = canvasWidth - 30;
  let panelH = 62;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  fill('black');
  if (lastNote) {
    text(lastNote, panelX + 14, panelY + 10, panelW - 28, panelH - 16);
  } else {
    text('Click the buttons below. Watch the index labels — they renumber every time the list changes shape.', panelX + 14, panelY + 10, panelW - 28, panelH - 16);
  }
}

// the mutable-vs-immutable contrast panel
function drawStringTest() {
  let panelX = 15;
  let panelY = 334;
  let panelW = canvasWidth - 30;
  let panelH = 86;

  fill(255, 244, 244);
  stroke('indianred');
  strokeWeight(1.5);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill('indianred');
  textAlign(LEFT, TOP);
  textSize(14);
  text('the same move on a STRING:', panelX + 14, panelY + 8);
  fill('midnightblue');
  textSize(16);
  text('word = "red"', panelX + 14, panelY + 28);
  text('word[0] = "X"', panelX + 150, panelY + 28);
  fill('indianred');
  text('TypeError: \'str\' object does not support item assignment', panelX + 14, panelY + 52, panelW - 28, 30);
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
