// Dictionary Key Lookup MicroSim
// CANVAS_HEIGHT: 530
// Students type a key and the matching drawer springs open with its
// value - or a KeyError banner appears (or None, with the .get()
// toggle). A comparison mode shows a list checking items one by one
// while the dictionary finds its answer in a single hop.
// Bloom level: Understand (explain, compare, infer).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 80; // row 1: key input + button, row 2: checkboxes
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// the phone book dictionary (insertion order preserved, like Python)
let book = [
  { key: 'ada', value: '555-0101' },
  { key: 'grace', value: '555-0202' },
  { key: 'alan', value: '555-0303' },
  { key: 'katherine', value: '555-0404' },
  { key: 'guido', value: '555-0505' }
];

let keyInput, lookupButton, getCheckbox, compareCheckbox;
let lastKey = null;      // the key from the most recent lookup
let lastFound = false;
let lastValue = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  keyInput = createInput('grace');
  keyInput.parent(mainElement);
  keyInput.position(100, drawHeight + 8);
  keyInput.size(160);

  lookupButton = createButton('Look Up');
  lookupButton.parent(mainElement);
  lookupButton.position(280, drawHeight + 8);
  lookupButton.mousePressed(doLookup);

  getCheckbox = createCheckbox(' use .get() instead of [ ]', false);
  getCheckbox.parent(mainElement);
  getCheckbox.position(10, drawHeight + 46);

  compareCheckbox = createCheckbox(' compare with a list search', false);
  compareCheckbox.parent(mainElement);
  compareCheckbox.position(230, drawHeight + 46);

  describe('Type a key and the matching dictionary drawer springs open with its value, or a KeyError banner appears for a missing key. A comparison mode shows a list checking items one by one while the dictionary finds the answer in a single hop.', LABEL);
}

function doLookup() {
  lastKey = keyInput.value().trim().toLowerCase();
  let entry = book.find(e => e.key === lastKey);
  lastFound = entry !== undefined;
  lastValue = lastFound ? entry.value : null;
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
  text('Dictionary Key Lookup', canvasWidth / 2, 8);

  // the code line for the current lookup
  noStroke();
  textAlign(CENTER, TOP);
  textSize(17);
  fill('midnightblue');
  let accessor = getCheckbox.checked()
    ? 'phone_book.get("' + (lastKey === null ? 'grace' : lastKey) + '")'
    : 'phone_book["' + (lastKey === null ? 'grace' : lastKey) + '"]';
  text(accessor, canvasWidth / 2, 42);

  drawDrawers();
  drawResult();
  if (compareCheckbox.checked()) {
    drawListComparison();
  } else {
    drawHint();
  }

  // control labels
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('key:', 15, drawHeight + 20);
}

// the dictionary as a cabinet of key/value drawers
function drawDrawers() {
  let n = book.length;
  let drawerW = Math.min(140, (canvasWidth - 60) / n);
  let x0 = (canvasWidth - drawerW * n) / 2;
  let y = 88;
  let closedH = 54;
  let openH = 96;

  for (let i = 0; i < n; i++) {
    let x = x0 + i * drawerW;
    let isOpen = lastFound && book[i].key === lastKey;
    let h = isOpen ? openH : closedH;

    // drawer front
    stroke(isOpen ? 'darkorange' : 140);
    strokeWeight(isOpen ? 3 : 1);
    fill(isOpen ? color(255, 244, 214) : color(222, 210, 190)); // wood tones
    rect(x + 3, y, drawerW - 6, h, 6);

    // handle
    noStroke();
    fill(120);
    rect(x + drawerW / 2 - 12, y + 10, 24, 5, 2);

    // key label on the front
    fill('black');
    textAlign(CENTER, TOP);
    textSize(15);
    text('"' + book[i].key + '"', x + drawerW / 2, y + 22);

    // the value, visible only in the open drawer
    if (isOpen) {
      fill('midnightblue');
      textSize(16);
      text(book[i].value, x + drawerW / 2, y + 56);
      fill('darkorange');
      textSize(12);
      text('opened in ONE hop', x + drawerW / 2, y + 76);
    }
  }

  noStroke();
  fill(100);
  textSize(14);
  textAlign(CENTER, TOP);
  text('phone_book — every drawer has a key on the front', canvasWidth / 2, y + openH + 12);
}

// result banner: value, KeyError, or None
function drawResult() {
  let y = 216;
  noStroke();
  textAlign(CENTER, TOP);

  if (lastKey === null) {
    fill(120);
    textSize(defaultTextSize);
    text('Type a key and click Look Up. Predict first: which drawer will open?', canvasWidth / 2, y);
    return;
  }

  if (lastFound) {
    fill('darkgreen');
    textSize(19);
    text('→  "' + lastValue + '"', canvasWidth / 2, y);
  } else if (getCheckbox.checked()) {
    fill(90);
    textSize(19);
    text('→  None', canvasWidth / 2, y);
    fill(120);
    textSize(14);
    text('.get() answers politely when the key is missing — no crash.', canvasWidth / 2, y + 26);
  } else {
    // the KeyError banner
    let w = Math.min(canvasWidth - 60, 560);
    fill(255, 224, 224);
    stroke('indianred');
    strokeWeight(2);
    rect((canvasWidth - w) / 2, y - 4, w, 34, 8);
    noStroke();
    fill('indianred');
    textSize(16);
    text("KeyError: '" + lastKey + "'", canvasWidth / 2, y + 4);
  }
}

// hint panel shown when comparison mode is off
function drawHint() {
  let panelX = 15;
  let panelY = 268;
  let panelW = canvasWidth - 30;
  let panelH = 168;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  fill('black');
  text('A dictionary jumps straight to the right drawer using the key — it never reads the other drawers.', panelX + 15, panelY + 14, panelW - 30, 50);
  text('Keys must match EXACTLY: try "Grace" with a capital G and see what happens.', panelX + 15, panelY + 66, panelW - 30, 50);
  fill(120);
  textSize(14);
  text('Check "compare with a list search" to see how much work a list does for the same question.', panelX + 15, panelY + 122, panelW - 30, 40);
}

// comparison: the same data in a list, scanned item by item
function drawListComparison() {
  let panelX = 15;
  let panelY = 268;
  let panelW = canvasWidth - 30;
  let panelH = 168;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('the same data as a LIST — Python must check each item:', panelX + 15, panelY + 10);

  // the list boxes
  let n = book.length;
  let boxW = Math.min(130, (panelW - 40) / n);
  let x0 = panelX + 20;
  let y = panelY + 34;
  let checksNeeded = lastKey === null ? 0
    : (lastFound ? book.findIndex(e => e.key === lastKey) + 1 : n);

  for (let i = 0; i < n; i++) {
    let x = x0 + i * boxW;
    let scanned = i < checksNeeded;
    let isHit = lastFound && book[i].key === lastKey;
    stroke(isHit ? 'darkgreen' : 150);
    strokeWeight(isHit ? 3 : 1);
    fill(isHit ? color(220, 242, 220) : (scanned ? color(235) : 'white'));
    rect(x, y, boxW - 8, 44, 6);
    noStroke();
    fill(scanned && !isHit ? color(150) : 'black');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('"' + book[i].key + '"', x + (boxW - 8) / 2, y + 15);
    if (scanned && !isHit) {
      fill('indianred');
      textSize(11);
      text('checked ✗', x + (boxW - 8) / 2, y + 32);
    } else if (isHit) {
      fill('darkgreen');
      textSize(11);
      text('found ✓', x + (boxW - 8) / 2, y + 32);
    }
  }

  // the scoreboard
  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  if (lastKey === null) {
    fill(120);
    text('Do a lookup to start the race.', panelX + 15, panelY + 96);
  } else {
    fill('indianred');
    text('list: ' + checksNeeded + ' check' + (checksNeeded === 1 ? '' : 's') +
      (lastFound ? '' : ' (looked at everything and still failed)'), panelX + 15, panelY + 96);
    fill('darkgreen');
    text('dictionary: 1 hop, straight to the drawer', panelX + 15, panelY + 124);
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
