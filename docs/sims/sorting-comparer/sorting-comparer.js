// Sorting Algorithm Comparer MicroSim
// CANVAS_HEIGHT: 540
// Students step bubble, selection, and insertion sort one comparison
// at a time on a bar chart, or race bubble vs insertion side by side
// on identical data with live comparison and swap counters.
// Bloom level: Analyze/Evaluate (compare, organize, judge).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 80; // row 1: two selects, row 2: three buttons
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

let algoSelect, dataSelect;
let stepButton, playButton, resetButton;
let isPlaying = false;

let baseData = [];        // the data both panels start from
// each panel: {name, trace, pos}
let panels = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  algoSelect = createSelect();
  algoSelect.parent(mainElement);
  algoSelect.position(10, drawHeight + 8);
  for (let name of ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Race - Bubble vs Insertion']) {
    algoSelect.option(name);
  }
  algoSelect.changed(rebuild);

  dataSelect = createSelect();
  dataSelect.parent(mainElement);
  dataSelect.position(230, drawHeight + 8);
  for (let name of ['random data', 'nearly sorted', 'reversed']) {
    dataSelect.option(name);
  }
  dataSelect.changed(() => { makeData(); rebuild(); });

  stepButton = createButton('Step');
  stepButton.parent(mainElement);
  stepButton.position(10, drawHeight + 44);
  stepButton.mousePressed(() => {
    isPlaying = false;
    playButton.html('Auto-play');
    stepOnce();
  });

  playButton = createButton('Auto-play');
  playButton.parent(mainElement);
  playButton.position(75, drawHeight + 44);
  playButton.mousePressed(() => {
    isPlaying = !isPlaying;
    playButton.html(isPlaying ? 'Pause' : 'Auto-play');
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(170, drawHeight + 44);
  resetButton.mousePressed(() => { makeData(); rebuild(); });

  makeData();
  rebuild();

  describe('Step bubble, selection, and insertion sort one comparison at a time on a bar chart, or race bubble versus insertion side by side on identical data with live comparison and swap counters.', LABEL);
}

// ---------- data and traces ----------
function makeData() {
  let mode = dataSelect ? dataSelect.value() : 'random data';
  baseData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (mode === 'random data') {
    for (let i = baseData.length - 1; i > 0; i--) {
      let j = Math.floor(random(i + 1));
      [baseData[i], baseData[j]] = [baseData[j], baseData[i]];
    }
  } else if (mode === 'nearly sorted') {
    [baseData[2], baseData[3]] = [baseData[3], baseData[2]];
    [baseData[7], baseData[8]] = [baseData[8], baseData[7]];
  } else {
    baseData.reverse();
  }
}

// every op: {arr, hl:[i,j], kind:'compare'|'swap', c, s}
function traceBubble(data) {
  let a = data.slice(), ops = [], c = 0, s = 0;
  for (let pass = 0; pass < a.length - 1; pass++) {
    for (let j = 0; j < a.length - 1 - pass; j++) {
      c += 1;
      ops.push({ arr: a.slice(), hl: [j, j + 1], kind: 'compare', c: c, s: s });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        s += 1;
        ops.push({ arr: a.slice(), hl: [j, j + 1], kind: 'swap', c: c, s: s });
      }
    }
  }
  return ops;
}

function traceSelection(data) {
  let a = data.slice(), ops = [], c = 0, s = 0;
  for (let i = 0; i < a.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      c += 1;
      ops.push({ arr: a.slice(), hl: [minIdx, j], kind: 'compare', c: c, s: s });
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      s += 1;
      ops.push({ arr: a.slice(), hl: [i, minIdx], kind: 'swap', c: c, s: s });
    }
  }
  return ops;
}

function traceInsertion(data) {
  let a = data.slice(), ops = [], c = 0, s = 0;
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0) {
      c += 1;
      ops.push({ arr: a.slice(), hl: [j - 1, j], kind: 'compare', c: c, s: s });
      if (a[j - 1] > a[j]) {
        [a[j - 1], a[j]] = [a[j], a[j - 1]];
        s += 1;
        ops.push({ arr: a.slice(), hl: [j - 1, j], kind: 'swap', c: c, s: s });
        j -= 1;
      } else {
        break;
      }
    }
  }
  return ops;
}

function rebuild() {
  isPlaying = false;
  if (playButton) playButton.html('Auto-play');
  let mode = algoSelect ? algoSelect.value() : 'Bubble Sort';
  if (mode === 'Race - Bubble vs Insertion') {
    panels = [
      { name: 'Bubble Sort', trace: traceBubble(baseData), pos: -1 },
      { name: 'Insertion Sort', trace: traceInsertion(baseData), pos: -1 }
    ];
  } else {
    let fn = mode === 'Bubble Sort' ? traceBubble
      : (mode === 'Selection Sort' ? traceSelection : traceInsertion);
    panels = [{ name: mode, trace: fn(baseData), pos: -1 }];
  }
}

function stepOnce() {
  let advanced = false;
  for (let p of panels) {
    if (p.pos < p.trace.length - 1) {
      p.pos += 1;
      advanced = true;
    }
  }
  if (!advanced) {
    isPlaying = false;
    playButton.html('Auto-play');
  }
}

// ---------- drawing ----------
function draw() {
  updateCanvasSize();

  if (isPlaying && frameCount % 18 === 0) {
    stepOnce();
  }

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
  text('Sorting Algorithm Comparer', canvasWidth / 2, 8);

  if (panels.length === 1) {
    drawPanel(panels[0], 20, 46, canvasWidth - 40, 330);
  } else {
    let w = (canvasWidth - 60) / 2;
    drawPanel(panels[0], 20, 46, w, 330);
    drawPanel(panels[1], 40 + w, 46, w, 330);
  }

  drawNote();
}

function drawPanel(p, x, y, w, h) {
  // panel frame
  fill('white');
  stroke(200);
  strokeWeight(1);
  rect(x, y, w, h, 8);

  let op = (p.pos >= 0) ? p.trace[p.pos] : null;
  let arr = op ? op.arr : baseData;
  let done = p.pos >= p.trace.length - 1;

  // header
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(15);
  text(p.name, x + 10, y + 8);

  // counters
  fill(90);
  textSize(13);
  let c = op ? op.c : 0;
  let s = op ? op.s : 0;
  text('comparisons: ' + c + '    swaps: ' + s, x + 10, y + 28);

  // bars
  let n = arr.length;
  let barW = (w - 30) / n;
  let baseY = y + h - 34;
  let maxH = h - 110;
  for (let i = 0; i < n; i++) {
    let bh = (arr[i] / 10) * maxH;
    let isHl = op && (op.hl[0] === i || op.hl[1] === i);
    if (done) {
      fill('seagreen');
      stroke('seagreen');
    } else if (isHl && op.kind === 'swap') {
      fill('coral');
      stroke('crimson');
    } else if (isHl) {
      fill(255, 224, 130);
      stroke('darkorange');
    } else {
      fill('steelblue');
      stroke('steelblue');
    }
    strokeWeight(isHl ? 2 : 1);
    rect(x + 15 + i * barW, baseY - bh, barW - 4, bh, 3);
    noStroke();
    fill(90);
    textAlign(CENTER, TOP);
    textSize(11);
    text(arr[i], x + 15 + i * barW + (barW - 4) / 2, baseY + 4);
  }

  // status line
  noStroke();
  textAlign(LEFT, TOP);
  textSize(13);
  if (done) {
    fill('seagreen');
    text('sorted! total work: ' + (p.trace[p.trace.length - 1].c + p.trace[p.trace.length - 1].s) + ' operations', x + 10, y + h - 18);
  } else if (op) {
    fill(op.kind === 'swap' ? 'crimson' : 'darkorange');
    text(op.kind === 'swap' ? 'out of order — SWAP!' : 'comparing the two highlighted bars...', x + 10, y + h - 18);
  } else {
    fill(120);
    text('click Step to begin', x + 10, y + h - 18);
  }
}

function drawNote() {
  let panelX = 15;
  let panelY = 388;
  let panelW = canvasWidth - 30;
  let panelH = 60;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  fill('black');
  let mode = algoSelect ? algoSelect.value() : '';
  if (mode === 'Race - Bubble vs Insertion') {
    text('Both panels sort IDENTICAL data. Watch the counters: which algorithm finishes with less work? Now switch the data to "nearly sorted" and race again — does the winner change?', panelX + 12, panelY + 8, panelW - 24, panelH - 14);
  } else {
    text('Every sort is just compares and swaps in a different order. Predict: how many comparisons will this algorithm need? Step through, or Auto-play and watch the counters. Then try "reversed" data — the worst case.', panelX + 12, panelY + 8, panelW - 24, panelH - 14);
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
