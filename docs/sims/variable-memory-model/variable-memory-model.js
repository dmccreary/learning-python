// Variable Memory Model MicroSim
// CANVAS_HEIGHT: 480
// Students step through a short assignment script and watch labeled
// memory boxes get created, read, and replaced. Reassignment visibly
// shows the old value being replaced by the new one.
// Bloom level: Understand (explain, interpret, predict) - step-through
// pattern with concrete data visibility, no continuous animation.
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

// Each line: text, assign {name, value} or null, reads [names], note.
// Values are strings for display; quoted values are Python strings.
let programs = {
  'Game Score': [
    { text: 'score = 10',        assign: { name: 'score', value: '10' },  reads: [], note: 'Python creates a box named "score" and stores 10 in it.' },
    { text: 'lives = 3',         assign: { name: 'lives', value: '3' },   reads: [], note: 'A second box named "lives" now holds 3.' },
    { text: 'print(score)',      assign: null,                            reads: ['score'], note: 'Python READS the score box (blue outline) and prints 10.' },
    { text: 'score = score + 5', assign: { name: 'score', value: '15' },  reads: ['score'], note: 'Python reads score (10), adds 5, then REPLACES the value in the box with 15.' },
    { text: 'print(score)',      assign: null,                            reads: ['score'], note: 'The box now holds 15 — the old 10 is gone forever.' }
  ],
  'Name Tag': [
    { text: 'name = "Ada"',      assign: { name: 'name', value: '"Ada"' }, reads: [], note: 'A box named "name" stores the text "Ada". Text values keep their quotes.' },
    { text: 'greeting = "Hi"',   assign: { name: 'greeting', value: '"Hi"' }, reads: [], note: 'A second box stores the text "Hi".' },
    { text: 'name = "Grace"',    assign: { name: 'name', value: '"Grace"' }, reads: [], note: 'Reassignment: the old value "Ada" is replaced by "Grace".' },
    { text: 'print(greeting)',   assign: null,                             reads: ['greeting'], note: 'Reading greeting does not change it — boxes only change on assignment.' },
    { text: 'print(name)',       assign: null,                             reads: ['name'], note: 'This prints "Grace". The box remembers only its newest value.' }
  ],
  'Copy Surprise': [
    { text: 'a = 5',             assign: { name: 'a', value: '5' },        reads: [], note: 'Box "a" holds 5.' },
    { text: 'b = a',             assign: { name: 'b', value: '5' },        reads: ['a'], note: 'Python reads a (5) and stores a COPY in box "b". The boxes are separate.' },
    { text: 'a = 7',             assign: { name: 'a', value: '7' },        reads: [], note: 'Predict first: what is in box "b" right now?' },
    { text: 'print(b)',          assign: null,                             reads: ['b'], note: 'It prints 5! Changing a later never reaches b — b got its own copy.' }
  ]
};

let programNames = ['Game Score', 'Name Tag', 'Copy Surprise'];
let currentProgram = 'Game Score';
let step = -1; // index of the line just executed; -1 = not started

let nextButton, prevButton, resetButton, programSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  nextButton = createButton('Next Step');
  nextButton.parent(mainElement);
  nextButton.position(10, drawHeight + 10);
  nextButton.mousePressed(() => {
    if (step < programs[currentProgram].length - 1) step += 1;
  });

  prevButton = createButton('Previous');
  prevButton.parent(mainElement);
  prevButton.position(105, drawHeight + 10);
  prevButton.mousePressed(() => {
    if (step > -1) step -= 1;
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(195, drawHeight + 10);
  resetButton.mousePressed(() => { step = -1; });

  programSelect = createSelect();
  programSelect.parent(mainElement);
  programSelect.position(265, drawHeight + 10);
  for (let name of programNames) {
    programSelect.option(name);
  }
  programSelect.changed(() => {
    currentProgram = programSelect.value();
    step = -1;
  });

  describe('Step through a short Python script and watch labeled memory boxes get created, read, and replaced as each assignment runs.', LABEL);
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
  text('Variable Memory Model', canvasWidth / 2, 8);

  let lines = programs[currentProgram];

  drawScriptPanel(lines);
  drawMemoryBoxes(lines);
  drawNotePanel(lines);
}

// left panel: the script with the execution arrow
function drawScriptPanel(lines) {
  let panelX = 15;
  let panelY = 42;
  let panelW = canvasWidth * 0.45 - 20;
  let panelH = 195;

  fill('white');
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('script.py', panelX + 10, panelY + 5);

  textSize(defaultTextSize);
  let lineHeight = 30;
  for (let i = 0; i < lines.length; i++) {
    let y = panelY + 28 + i * lineHeight;
    if (i === step) {
      noStroke();
      fill(255, 236, 179);
      rect(panelX + 26, y - 4, panelW - 34, lineHeight - 4, 4);
      fill('darkorange');
      triangle(panelX + 6, y, panelX + 6, y + 16, panelX + 20, y + 8);
    }
    noStroke();
    fill('midnightblue');
    textAlign(LEFT, TOP);
    text(lines[i].text, panelX + 32, y);
  }
}

// compute the memory state {name: {value, justWritten, justRead, oldValue}} after `step`
function memoryState(lines) {
  let state = {};   // name -> value
  let order = [];   // creation order of names
  let oldValues = {};
  for (let i = 0; i <= step && i < lines.length; i++) {
    let a = lines[i].assign;
    if (a) {
      if (!(a.name in state)) {
        order.push(a.name);
        oldValues[a.name] = null;
      } else {
        oldValues[a.name] = (i === step) ? state[a.name] : null;
      }
      state[a.name] = a.value;
    }
  }
  return { state, order, oldValues };
}

// right area: one labeled box per variable
function drawMemoryBoxes(lines) {
  let areaX = canvasWidth * 0.45 + 10;
  let areaY = 42;
  let areaW = canvasWidth * 0.55 - 25;

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('Memory', areaX, areaY);

  let mem = memoryState(lines);
  let current = (step >= 0 && step < lines.length) ? lines[step] : null;
  let boxW = 130;
  let boxH = 74;
  let gapX = 20;
  let gapY = 18;
  let perRow = Math.max(1, Math.floor((areaW + gapX) / (boxW + gapX)));

  for (let i = 0; i < mem.order.length; i++) {
    let name = mem.order[i];
    let col = i % perRow;
    let row = Math.floor(i / perRow);
    let x = areaX + col * (boxW + gapX);
    let y = areaY + 32 + row * (boxH + gapY);

    // outline: orange if just written, blue if read by the current line
    let justWritten = current && current.assign && current.assign.name === name;
    let justRead = current && current.reads.includes(name);
    strokeWeight(justWritten || justRead ? 3 : 1);
    if (justWritten) {
      stroke('darkorange');
    } else if (justRead) {
      stroke('steelblue');
    } else {
      stroke(160);
    }
    fill('lemonchiffon');
    rect(x, y, boxW, boxH, 8);

    // name label on top of the box like a sticky-note title
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(defaultTextSize);
    text(name, x + boxW / 2, y + 8);

    // the stored value, large
    textSize(22);
    fill('midnightblue');
    text(mem.state[name], x + boxW / 2, y + 32);

    // if this step replaced a value, show what was there before
    if (justWritten && mem.oldValues[name]) {
      textSize(13);
      fill(180, 60, 60);
      text('was ' + mem.oldValues[name], x + boxW / 2, y + boxH - 17);
    }
    // read/write badge above the box
    if (justWritten || justRead) {
      textSize(13);
      fill(justWritten ? 'darkorange' : 'steelblue');
      text(justWritten ? 'WRITE' : 'READ', x + boxW / 2, y - 16);
    }
  }

  if (mem.order.length === 0) {
    noStroke();
    fill(120);
    textAlign(LEFT, TOP);
    textSize(defaultTextSize);
    text('(no boxes yet — click Next Step)', areaX, areaY + 34);
  }
}

// bottom panel: plain-language note for the current line
function drawNotePanel(lines) {
  let panelX = 15;
  let panelY = 250;
  let panelW = canvasWidth - 30;
  let panelH = 168;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  if (step < 0) {
    fill('black');
    text('A variable is a labeled box in the computer\'s memory.', panelX + 15, panelY + 14, panelW - 30, panelH - 20);
    text('Assignment (=) stores a value in a box. Reading a variable looks inside its box.', panelX + 15, panelY + 42, panelW - 30, panelH - 50);
    text('Predict: how many boxes will this script create?', panelX + 15, panelY + 84, panelW - 30, panelH - 90);
  } else {
    fill('darkorange');
    text('Line ' + (step + 1) + ':', panelX + 15, panelY + 14);
    fill('midnightblue');
    text(lines[step].text, panelX + 80, panelY + 14);
    fill('black');
    text(lines[step].note, panelX + 15, panelY + 46, panelW - 30, panelH - 56);
    if (step >= lines.length - 1) {
      fill('green');
      text('Script finished. Try the other programs in the dropdown!', panelX + 15, panelY + 118, panelW - 30, 40);
    }
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
