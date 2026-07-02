// Scope Inspector MicroSim
// CANVAS_HEIGHT: 510
// Students step through a program with global and local variables.
// The Global room is always visible; a Function room appears during a
// call and vanishes at return, taking its variables with it. Each name
// lookup highlights the box actually used - local first, then global -
// so shadowing becomes literally visible.
// Bloom level: Analyze (differentiate, attribute, debug).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// Each step: line, globals {name: value}, locals ({name: value} or null
// when no function room exists), reads [{name, room}], writes
// [{name, room}], miss (true when a local lookup fell through to
// global), out [], note.
let programs = {
  'Read the Global': {
    lines: ['score = 10', 'def show():', '    print(score)', 'show()'],
    steps: [
      { line: 0, globals: { score: '10' }, locals: null, reads: [], writes: [{ name: 'score', room: 'global' }], miss: false, out: [],
        note: 'score is created OUTSIDE any function, so it lives in the Global room.' },
      { line: 1, globals: { score: '10' }, locals: null, reads: [], writes: [], miss: false, out: [],
        note: 'def stores the function. Its body will not run until we call it.' },
      { line: 3, globals: { score: '10' }, locals: {}, reads: [], writes: [], miss: false, out: [],
        note: 'The call show() opens a brand-new Function room. Right now it is empty.' },
      { line: 2, globals: { score: '10' }, locals: {}, reads: [{ name: 'score', room: 'global' }], writes: [], miss: true, out: ['10'],
        note: 'print(score) looks for score in the Function room first — not there! — so Python checks the Global room and finds 10.' },
      { line: 3, globals: { score: '10' }, locals: null, reads: [], writes: [], miss: false, out: ['10'],
        note: 'The function returns and its room vanishes. Reading a global from inside a function is always allowed.' }
    ]
  },
  'Shadowing Bug': {
    lines: ['score = 10', 'def play():', '    score = 99', '    print(score)', 'play()', 'print(score)'],
    steps: [
      { line: 0, globals: { score: '10' }, locals: null, reads: [], writes: [{ name: 'score', room: 'global' }], miss: false, out: [],
        note: 'The global score box holds 10.' },
      { line: 1, globals: { score: '10' }, locals: null, reads: [], writes: [], miss: false, out: [],
        note: 'def stores the function.' },
      { line: 4, globals: { score: '10' }, locals: {}, reads: [], writes: [], miss: false, out: [],
        note: 'play() opens a Function room.' },
      { line: 2, globals: { score: '10' }, locals: { score: '99' }, reads: [], writes: [{ name: 'score', room: 'local' }], miss: false, out: [],
        note: 'Assignment inside a function creates a NEW LOCAL box — it does not touch the global score. The local box now SHADOWS the global one.' },
      { line: 3, globals: { score: '10' }, locals: { score: '99' }, reads: [{ name: 'score', room: 'local' }], writes: [], miss: false, out: ['99'],
        note: 'print(score) checks the Function room first and finds 99. The global 10 never gets a chance.' },
      { line: 4, globals: { score: '10' }, locals: null, reads: [], writes: [], miss: false, out: ['99'],
        note: 'The function ends — and the local score box is thrown away with the room!' },
      { line: 5, globals: { score: '10' }, locals: null, reads: [{ name: 'score', room: 'global' }], writes: [], miss: false, out: ['99', '10'],
        note: 'Outside the function, score means the global box: still 10. The 99 was a different box all along.' }
    ]
  },
  'The global Fix': {
    lines: ['score = 10', 'def add_points():', '    global score', '    score = score + 5', 'add_points()', 'print(score)'],
    steps: [
      { line: 0, globals: { score: '10' }, locals: null, reads: [], writes: [{ name: 'score', room: 'global' }], miss: false, out: [],
        note: 'The global score box holds 10.' },
      { line: 1, globals: { score: '10' }, locals: null, reads: [], writes: [], miss: false, out: [],
        note: 'def stores the function.' },
      { line: 4, globals: { score: '10' }, locals: {}, reads: [], writes: [], miss: false, out: [],
        note: 'add_points() opens a Function room.' },
      { line: 2, globals: { score: '10' }, locals: {}, reads: [], writes: [], miss: false, out: [],
        note: 'global score is a promise: "in this function, score always means the GLOBAL box." No local box will be made.' },
      { line: 3, globals: { score: '15' }, locals: {}, reads: [{ name: 'score', room: 'global' }], writes: [{ name: 'score', room: 'global' }], miss: false, out: [],
        note: 'Thanks to the global keyword, Python reads 10 from the Global room and writes 15 straight back into it.' },
      { line: 4, globals: { score: '15' }, locals: null, reads: [], writes: [], miss: false, out: [],
        note: 'The room vanishes — but this time the change survives, because it happened in the Global room.' },
      { line: 5, globals: { score: '15' }, locals: null, reads: [{ name: 'score', room: 'global' }], writes: [], miss: false, out: ['15'],
        note: 'print(score) shows 15. Use global sparingly — most functions should use return instead!' }
    ]
  }
};

let programNames = ['Read the Global', 'Shadowing Bug', 'The global Fix'];
let currentProgram = 'Read the Global';
let step = -1;

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
    if (step < programs[currentProgram].steps.length - 1) step += 1;
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

  describe('Step through a Python program with global and local variables. A Global scope room is always visible; a Function room appears during calls and vanishes at return. Name lookups highlight which room and box Python actually uses, making shadowing visible.', LABEL);
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
  text('Scope Inspector', canvasWidth / 2, 8);

  let prog = programs[currentProgram];
  let s = (step >= 0) ? prog.steps[step] : null;

  drawCodePanel(prog, s);
  drawRooms(s);
  drawNotePanel(prog, s);
}

// left: the program with the execution arrow
function drawCodePanel(prog, s) {
  let panelX = 15;
  let panelY = 42;
  let panelW = canvasWidth * 0.46 - 25;
  let panelH = 226;

  fill('white');
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('program.py', panelX + 10, panelY + 5);

  textSize(defaultTextSize);
  let lineHeight = 30;
  for (let i = 0; i < prog.lines.length; i++) {
    let y = panelY + 28 + i * lineHeight;
    if (s && i === s.line) {
      noStroke();
      fill(255, 236, 179);
      rect(panelX + 26, y - 4, panelW - 34, lineHeight - 4, 4);
      fill('darkorange');
      triangle(panelX + 6, y, panelX + 6, y + 16, panelX + 20, y + 8);
    }
    noStroke();
    fill('midnightblue');
    textAlign(LEFT, TOP);
    text(prog.lines[i], panelX + 32, y);
  }

  // mini output console under the code
  let cy = panelY + panelH + 10;
  fill(40);
  stroke(200);
  strokeWeight(1);
  rect(panelX, cy, panelW, 40, 8);
  noStroke();
  fill(180);
  textSize(13);
  textAlign(LEFT, TOP);
  text('Output:', panelX + 8, cy + 4);
  fill(120, 255, 120);
  textSize(defaultTextSize);
  let outs = s ? s.out : [];
  text(outs.join('   '), panelX + 70, cy + 11);
}

// right: the Global room (always) and the Function room (during calls)
function drawRooms(s) {
  let x = canvasWidth * 0.46 + 5;
  let w = canvasWidth - x - 15;

  // Global room
  drawRoom(x, 42, w, 118, 'Global room', color(232, 240, 254), 'steelblue',
    s ? s.globals : {}, s, 'global');

  // Function room (only while a call is active)
  if (s && s.locals !== null) {
    drawRoom(x, 172, w, 118, 'Function room (temporary)', color(255, 244, 222), 'darkorange',
      s.locals, s, 'local');
    // local-miss badge: lookup checked here first and found nothing
    if (s.miss) {
      noStroke();
      fill('indianred');
      textSize(14);
      textAlign(CENTER, TOP);
      text('not found here → check the Global room ↑', x + w / 2, 262);
    }
  } else {
    // placeholder so students see where the room appears
    stroke(200);
    strokeWeight(1);
    drawingContext.setLineDash([6, 6]);
    noFill();
    rect(x, 172, w, 118, 10);
    drawingContext.setLineDash([]);
    noStroke();
    fill(170);
    textAlign(CENTER, CENTER);
    textSize(14);
    text('(a Function room appears here\nduring a function call)', x + w / 2, 231);
  }
}

// a scope room with its variable boxes
function drawRoom(x, y, w, h, label, bg, accent, vars, s, roomName) {
  stroke(accent);
  strokeWeight(2);
  fill(bg);
  rect(x, y, w, h, 10);
  noStroke();
  fill(accent);
  textAlign(LEFT, TOP);
  textSize(14);
  text(label, x + 10, y + 7);

  let names = Object.keys(vars);
  let boxW = 96;
  let boxH = 52;
  for (let i = 0; i < names.length; i++) {
    let bx = x + 12 + i * (boxW + 12);
    let by = y + 30;
    // highlight if this box is read or written this step
    let isRead = s && s.reads.some(r => r.name === names[i] && r.room === roomName);
    let isWrite = s && s.writes.some(wr => wr.name === names[i] && wr.room === roomName);
    stroke(isWrite ? 'darkorange' : (isRead ? 'steelblue' : 160));
    strokeWeight(isWrite || isRead ? 3 : 1);
    fill('lemonchiffon');
    rect(bx, by, boxW, boxH, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(14);
    text(names[i], bx + boxW / 2, by + 6);
    textSize(18);
    fill('midnightblue');
    text(vars[names[i]], bx + boxW / 2, by + 26);
    if (isRead || isWrite) {
      textSize(12);
      fill(isWrite ? 'darkorange' : 'steelblue');
      text(isWrite ? 'WRITE' : 'READ', bx + boxW / 2, by + boxH + 3);
    }
  }
  if (names.length === 0) {
    noStroke();
    fill(150);
    textAlign(LEFT, TOP);
    textSize(14);
    text('(empty)', x + 14, y + 44);
  }
}

// bottom: the note panel
function drawNotePanel(prog, s) {
  let panelX = 15;
  let panelY = 328;
  let panelW = canvasWidth - 30;
  let panelH = 118;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  if (!s) {
    fill('black');
    text('Every variable lives in a room. The Global room lasts the whole program; each function call opens its own temporary room.', panelX + 15, panelY + 12, panelW - 30, 60);
    text('Predict: in this program, which room will each variable live in?', panelX + 15, panelY + 66, panelW - 30, 40);
  } else {
    fill('darkorange');
    text('Step ' + (step + 1) + ' of ' + prog.steps.length + ':', panelX + 15, panelY + 12);
    fill('black');
    text(s.note, panelX + 15, panelY + 40, panelW - 30, panelH - 50);
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
