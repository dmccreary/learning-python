// String Slicer MicroSim
// CANVAS_HEIGHT: 480
// Students drag slice handles over letter tiles to build index and
// slice expressions. Positive indices show above the tiles, negative
// below, and the live readout shows word[2:7] notation with its result.
// Clicking a single tile switches to index mode. Challenge mode asks
// for a target substring.
// Bloom level: Apply (use, execute, solve) - direct manipulation.
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80; // word input row + step/challenge row
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

let word = 'PYTHON ROCKS';
let startIdx = 2;   // slice start boundary (0..len)
let endIdx = 7;     // slice end boundary (start..len)
let stepVal = 1;
let mode = 'slice'; // 'slice' | 'index'
let indexIdx = 3;   // selected tile in index mode
let dragging = null; // null | 'start' | 'end'

let wordInput, stepSelect, challengeButton;

// challenges for the default word
let challenges = [
  { label: 'extract "ROCKS"', answer: 'ROCKS' },
  { label: 'extract "PYTHON"', answer: 'PYTHON' },
  { label: 'extract "THON"', answer: 'THON' },
  { label: 'extract "PTO" (hint: use step 2)', answer: 'PTO' }
];
let challenge = null;

// tile geometry, recomputed each frame
let tileW = 44, tileY = 120, tileH = 52, tilesX0 = 40;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  wordInput = createInput(word);
  wordInput.parent(mainElement);
  wordInput.position(110, drawHeight + 8);
  wordInput.size(180);
  wordInput.input(() => {
    let w = wordInput.value().toUpperCase().slice(0, 12);
    if (w.length >= 2) {
      word = w;
      startIdx = Math.min(startIdx, word.length);
      endIdx = Math.min(endIdx, word.length);
      challenge = null; // challenges only apply to the default word
    }
  });

  stepSelect = createSelect();
  stepSelect.parent(mainElement);
  stepSelect.position(110, drawHeight + 44);
  stepSelect.option('1');
  stepSelect.option('2');
  stepSelect.option('3');
  stepSelect.changed(() => {
    stepVal = parseInt(stepSelect.value());
    mode = 'slice';
  });

  challengeButton = createButton('New Challenge');
  challengeButton.parent(mainElement);
  challengeButton.position(190, drawHeight + 42);
  challengeButton.mousePressed(() => {
    word = 'PYTHON ROCKS';
    wordInput.value(word);
    challenge = challenges[Math.floor(random(challenges.length))];
    mode = 'slice';
  });

  describe('Drag slice handles over letter tiles to build Python index and slice expressions. Positive indices show above the tiles and negative indices below. The readout shows the slice notation and its result. Challenge mode asks you to extract a target substring.', LABEL);
}

// the characters selected by the current slice
function sliceResult() {
  let out = '';
  for (let i = startIdx; i < endIdx; i += stepVal) {
    out += word[i];
  }
  return out;
}

// which tile indices are selected by the current slice
function selectedIndices() {
  let sel = [];
  for (let i = startIdx; i < endIdx; i += stepVal) {
    sel.push(i);
  }
  return sel;
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
  text('String Slicer', canvasWidth / 2, 8);

  // recompute tile geometry for the current width and word
  tileW = Math.min(50, (canvasWidth - 80) / word.length);
  tilesX0 = (canvasWidth - tileW * word.length) / 2;

  drawTiles();
  if (mode === 'slice') {
    drawHandles();
  }
  drawReadout();
  drawNotes();

  // control labels
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('your word:', 15, drawHeight + 20);
  text('step:', 15, drawHeight + 56);
}

function drawTiles() {
  let sel = (mode === 'slice') ? selectedIndices() : [indexIdx];

  for (let i = 0; i < word.length; i++) {
    let x = tilesX0 + i * tileW;
    // tile
    let isSel = sel.includes(i);
    stroke(isSel ? 'darkorange' : 170);
    strokeWeight(isSel ? 2.5 : 1);
    fill(isSel ? color(255, 236, 179) : 'white');
    rect(x + 2, tileY, tileW - 4, tileH, 6);
    // the character (spaces drawn as a visible dot)
    noStroke();
    fill(word[i] === ' ' ? color(170) : 'midnightblue');
    textAlign(CENTER, CENTER);
    textSize(Math.min(26, tileW - 14));
    text(word[i] === ' ' ? '␣' : word[i], x + tileW / 2, tileY + tileH / 2);
    // positive index above
    fill(100);
    textSize(13);
    textAlign(CENTER, BOTTOM);
    text(i, x + tileW / 2, tileY - 6);
    // negative index below
    fill(150);
    text(i - word.length, x + tileW / 2, tileY + tileH + 20);
  }

  // axis captions
  noStroke();
  fill(100);
  textSize(13);
  textAlign(RIGHT, BOTTOM);
  text('index →', tilesX0 - 8, tileY - 6);
  fill(150);
  text('negative →', tilesX0 - 8, tileY + tileH + 20);
}

// draggable start and end boundary handles
function drawHandles() {
  let sx = tilesX0 + startIdx * tileW;
  let ex = tilesX0 + endIdx * tileW;
  let grabY = tileY + tileH + 44;

  // start handle (seagreen)
  stroke('seagreen');
  strokeWeight(3);
  line(sx, tileY - 24, sx, grabY - 10);
  noStroke();
  fill('seagreen');
  circle(sx, grabY, 22);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12);
  text(startIdx, sx, grabY);
  fill('seagreen');
  textSize(12);
  textAlign(CENTER, TOP);
  text('start', sx, grabY + 14);

  // end handle (crimson)
  stroke('crimson');
  strokeWeight(3);
  line(ex, tileY - 24, ex, grabY - 10);
  noStroke();
  fill('crimson');
  circle(ex, grabY, 22);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12);
  text(endIdx, ex, grabY);
  fill('crimson');
  textSize(12);
  textAlign(CENTER, TOP);
  text('end (not included)', ex, grabY + 14);
}

// the live notation readout
function drawReadout() {
  let y = 262;
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  fill('midnightblue');
  let notation, result;
  if (mode === 'slice') {
    notation = 'word[' + startIdx + ':' + endIdx + (stepVal > 1 ? ':' + stepVal : '') + ']';
    result = sliceResult();
  } else {
    notation = 'word[' + indexIdx + ']';
    result = word[indexIdx];
  }
  text(notation + '   →   "' + result + '"', canvasWidth / 2, y);
}

// explanation strip and challenge status
function drawNotes() {
  let panelX = 15;
  let panelY = 302;
  let panelW = canvasWidth - 30;
  let panelH = 86;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);

  if (challenge) {
    let solved = (mode === 'slice') && sliceResult() === challenge.answer;
    if (solved) {
      fill('seagreen');
      text('Solved! ' + challenge.label + ' — your slice works. Click New Challenge for another.', panelX + 14, panelY + 10, panelW - 28, 44);
    } else {
      fill('darkorange');
      text('Challenge: ' + challenge.label + '. Drag the handles (and set the step) to make it.', panelX + 14, panelY + 10, panelW - 28, 44);
    }
  } else if (mode === 'index') {
    fill('black');
    text('Index mode: one square bracket number picks ONE character. Click between tiles or drag a handle to go back to slicing.', panelX + 14, panelY + 10, panelW - 28, 44);
  } else {
    fill('black');
    text('Drag the green START and red END handles. The end position is never included — that is why the red handle sits just past the last selected letter.', panelX + 14, panelY + 10, panelW - 28, 44);
  }

  fill(120);
  textSize(13);
  text('Tip: click any tile to see single-character indexing like word[3].', panelX + 14, panelY + 60, panelW - 28, 22);
}

// --- direct manipulation ---
function mousePressed() {
  if (mouseY > drawHeight || mouseY < 0) return;
  let grabY = tileY + tileH + 44;
  let sx = tilesX0 + startIdx * tileW;
  let ex = tilesX0 + endIdx * tileW;

  // grab a handle?
  if (dist(mouseX, mouseY, sx, grabY) < 20) {
    dragging = 'start';
    mode = 'slice';
    return;
  }
  if (dist(mouseX, mouseY, ex, grabY) < 20) {
    dragging = 'end';
    mode = 'slice';
    return;
  }
  // click a tile -> index mode
  if (mouseY > tileY && mouseY < tileY + tileH) {
    let i = Math.floor((mouseX - tilesX0) / tileW);
    if (i >= 0 && i < word.length) {
      mode = 'index';
      indexIdx = i;
    }
  }
}

function mouseDragged() {
  if (!dragging) return;
  let boundary = Math.round((mouseX - tilesX0) / tileW);
  boundary = constrain(boundary, 0, word.length);
  if (dragging === 'start') {
    startIdx = Math.min(boundary, endIdx);
  } else {
    endIdx = Math.max(boundary, startIdx);
  }
}

function mouseReleased() {
  dragging = null;
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
